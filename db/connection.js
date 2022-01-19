const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'yQ8szawPc~xrKTB',
  database: 'election'
});

module.exports = db;