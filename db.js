const dbCredentials = require('./app/db/db.config');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: dbCredentials.host,
    user: dbCredentials.user,
    password: dbCredentials.password,
    database: dbCredentials.database
});

connection.connect(error=>{
    if(error) throw error;
    console.log("Successfuly connection to the database")
});
module.exports =connection;