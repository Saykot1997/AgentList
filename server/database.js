const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: process.env.host,
    user: process.env.user || "root",
    password: process.env.password || "25524",
    database: process.env.database || "agent_list"
})