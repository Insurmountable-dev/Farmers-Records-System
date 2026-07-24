const db = require("../database/db.js");
const sql = require("./data/sqlStatements.js");
const writeFile = require("../utils/writeFile.js");

async function fetchData() {

   for (const [index, statement] of sql.entries()) {

        const farmerData = [];

        db.query(statement.query, (err,results) => {

                if (err) {
                    console.error(err);
                    return;
                }

                for(let i = 0; i <sql.length; i++){

                    const object = results[i];
                    const key    = Object.keys(object)[0];
                    farmerData[i] = object[key];
                };

                writeFile(farmerData, statement.name, index);

        });

    }

}

module.exports = fetchData;