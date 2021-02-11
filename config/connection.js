var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "l2h3v78vnb5y9amt",
  password: "vhhdz5jdb6qmau1t",
  database: "qtsrakwxn8as9481"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;