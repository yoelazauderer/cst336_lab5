const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "hajt0juboxqg4zeb",
    password: "r7ba7egyzv7nxwli",
    database: "t9vvu4ji2l9rzfgy"
});

module.exports = pool;


