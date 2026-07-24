const dotenv = require("dotenv");
const mysql  = require("mysql2");

// Importing Env data
dotenv.config();

// Creating A Connection
const db = mysql.createConnection({ 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect((err) => {
    if(err){
        console.error("Connection To The Database Failed", err);
        return;
    }

    console.log("✅ Database Is Connected As Successfully");
})


module.exports = db;


