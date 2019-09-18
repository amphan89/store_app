var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0akland510!',
  database : 'pokemart_db',
  port : 3306
});
 
connection.connect();
 
connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();