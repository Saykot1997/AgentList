const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '25524',
    database: "agent_list"
})