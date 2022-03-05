const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: "localhost",
    user: "saykot",
    password: "25524",
    database: "agent_list"
})