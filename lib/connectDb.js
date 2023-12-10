var mysql = require('mysql');


;
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});



export const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results, fields) => {
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
    connection.end((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};

export default connection


