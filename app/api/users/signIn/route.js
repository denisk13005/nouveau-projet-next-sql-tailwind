import connection, { query } from "@/lib/connectDb";
import util from 'util';
const bcrypt = require('bcrypt')
const queryAsync = util.promisify(query).bind(connection);

async function getUser(email, password) {
  const req = `SELECT * FROM users where email like '${email}'`;


  // Générer un sel (salt) aléatoire une seule fois
  try {
    const results = await queryAsync(req);

    if (!results.length) {
      return new Response(JSON.stringify({ msg: 'bad credentials', status: 401 }))
    }
    const mdpOk = await bcrypt.compare(password, results[0].password)
    if (mdpOk) {
      const response = {
        pseudo: results[0].pseudo,
        email: results[0].email,
      }
      return response
    } else {
      throw new Error('bad credential')
    }
  } catch (error) {
    console.error('Error executing login query:', error);
    return new Response(JSON.stringify({ msg: 'erreur', status: 304 }))
  }




}

export async function POST(req, res) {

  const { email, password } = await req.json()

  const user = await getUser(email, password)
  if (!user.email) {
    return new Response(JSON.stringify({ msg: 'bad credentials', status: 401 }))
  }
  try {
    return new Response(JSON.stringify({ user: user, status: 200 }))
  } catch (error) {
    return new Response(JSON.stringify({ msg: "erreur", error }))

  }
};