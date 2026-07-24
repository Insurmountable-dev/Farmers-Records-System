const dotenv = require("dotenv");
const mysql  = require("mysql2");
const path   = require("path");



// Importing Env data
dotenv.config({
    path: path.resolve(__dirname, "../../.env")
});



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
        console.error("\n❌Connection To The Database Failed", err);
        return;
    }

    console.clear();
    console.log("\n✅ Database Is Connected As Successfully\n");
})


module.exports = db;


