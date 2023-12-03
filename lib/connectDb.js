var mysql = require('mysql');


// const connection = mysql.createConnection({
//   host: 'srv516.hstgr.io',
//   user: 'u962945446_kirmanndenis',
//   password: 'Lucas*2808',
//   database: 'u962945446_projetPerso'
// });
const pool = mysql.createPool({
  host: 'srv516.hstgr.io',
  user: 'u962945446_kirmanndenis',
  password: 'Lucas*2808',
  database: 'u962945446_projetPerso'
});

// connection.connect((err) => {
//   if (err) {
//     console.error('Erreur de connexion à la base de données : ' + err);
//   } else {
//     console.log('Connecté à la base de données MySQL');
//   }
// });

export const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

export const closeConnection = () => {
  return new Promise((resolve, reject) => {
    pool.end((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};


