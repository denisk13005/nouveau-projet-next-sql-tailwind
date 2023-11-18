var mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'srv516.hstgr.io',
  user: 'u962945446_kirmanndenis',
  password: 'Lucas*2808',
  database: 'u962945446_projetPerso'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});


module.exports = connection;


export default connection