// variables for SQL db connection

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hwkshdwm",
    database: "workforceDB"
});

connection.connect(function(err) {
    if (err) {
    console.error("Connection Error: " + err.stack);
    return;}
console.log("Connection Successful. Now connected as ID: " + connection.threadId);});


module.exports = connection;
