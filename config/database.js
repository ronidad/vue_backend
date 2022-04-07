import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "Ronyamo87",
  database: 'demo_db'
});
  
export default db;