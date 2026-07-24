const db = require("../database/db.js");
const sql = require("./data/sqlStatements.js");
const writeFile = require("../utils/writeFile.js");

function queryDatabase(query) {

    return new Promise((resolve, reject) => {

        db.query(query, (err, results) => {

            if (err) {
                reject(err);
                return;
            }

            resolve(results);

        });

    });

}


async function fetchData() {


    for (const [index, statement] of sql.entries()) {


        const results = await queryDatabase(statement.query);


        const farmerData = [];


        for (let i = 0; i < results.length; i++) {

            const object = results[i];

            const key = Object.keys(object)[0];

            farmerData.push(object[key]);

        }


        await writeFile(farmerData, statement.name);}


}


module.exports = fetchData;