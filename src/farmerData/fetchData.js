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

async function fetchData(callback) {

    try {

        console.log("\nDownloading latest farmer records...\n");

        for (const statement of sql) {

            const results = await queryDatabase(statement.query);

            const farmerData = [];

            for (const row of results) {

                const key = Object.keys(row)[0];
                farmerData.push(row[key]);

            }

            await writeFile(farmerData, statement.name);

        }
        console.log("✓ Farmer records downloaded successfully.\n");

        if (callback) {
            callback();
        }

    } catch (err) {

        console.error("❌ Failed to download farmer records.");
        console.error(err);

    }

}

module.exports = fetchData;