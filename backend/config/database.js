const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "expressapi"
});

module.exports = connection;