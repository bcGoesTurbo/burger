// dependencies
var mysql = require('mysql');

// connecting to the SQL database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Salem16Neve!",
    database: "burgers_db"
  });

// Make connection.
connection.connect(function(err){
    if (err) throw err;
    console.log("connection as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;