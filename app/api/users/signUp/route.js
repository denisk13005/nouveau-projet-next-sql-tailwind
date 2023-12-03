import connection from "@/lib/connectDb";
import util from 'util';
const bcrypt = require('bcrypt')

const queryAsync = util.promisify(connection.query).bind(connection);

async function checkExistingUser(email) {
  try {
    const query = `SELECT * FROM users WHERE email like '${email}'`;

    console.log('titi');

    // Utiliser await avec la version promisifiée de query
    const results = await queryAsync(query);

    // Traiter les résultats de la requête
    console.log('Résultats de la requête :', results);

    return results;
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête :', error);
    throw error;
  } finally {
    // Ne pas appeler connection.end() ici pour éviter de fermer la connexion prématurément
  }
}

async function insertUser(pseudo, email, password) {
  try {
    const query = `INSERT INTO users (pseudo, email, password) VALUES ('${pseudo}', '${email}', '${password}')`;
    const result = await queryAsync(query);
    return { id: result.insertId, pseudo, email }; // Retourner les informations de l'utilisateur inséré
  } finally {
    connection.end();
  }
}

export async function POST(request) {
  try {
    const { pseudo, email, password } = await request.json();
    console.log(password, '((((((');
    const motDePasseCrypte = await bcrypt.hash(password, 10);
    let ps
    if (pseudo.length) {
      ps = pseudo
    } else {
      ps = null
    }

    // Vérifier si l'e-mail est déjà utilisé
    const existingUser = await checkExistingUser(email);
    console.log(existingUser, 'oooo');

    if (existingUser.length > 0) {
      return new Response('user exist', { status: 401 });
    } else {
      // Insérer le nouvel utilisateur
      const newUser = await insertUser(ps, email, motDePasseCrypte);

      return new Response(JSON.stringify({ newUser: newUser, status: 200 }));
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ msg: 'Une erreur s\'est produite', error }));
  }
}
