const readFile = require("../utils/readFile");
const db = require("../database/db");

async function searchFarmer(rl, callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");
    const paymentStatuses = await readFile("paymentStatus");

    rl.question("\nEnter Farmer Number To Search: ", (searchNumber) => {

        let found = false;

        // Search the arrays first
        for (let i = 0; i < farmerNumbers.length; i++) {

            if (Number(searchNumber) === farmerNumbers[i]) {

                console.log("\n========== RECORD FROM ARRAYS ==========");
                console.log(`Farmer Number      : ${farmerNumbers[i]}`);
                console.log(`Farmer Name        : ${farmerNames[i]}`);
                console.log(`Produce Type       : ${produceTypes[i]}`);
                console.log(`Quantity Delivered : ${quantities[i]}`);
                console.log(`Price Per Unit     : KSh ${prices[i]}`);
                console.log(`Payment Status     : ${paymentStatuses[i]}`);

                found = true;
                break;
            }
        }

        if (!found) {
            console.log("\nFarmer record not found.");
            callback();
            return;
        }

        // Search the database
        const sql = `
            SELECT
                farmerNumber,
                farmerName,
                produceType,
                quantityDelivered,
                pricePerUnit,
                paymentStatus
            FROM ProduceDeliveries
            WHERE farmerNumber = ?;
        `;

        db.query(sql, [searchNumber], (err, results) => {

            if (err) {
                console.log(err);
                callback();
                return;
            }

            if (results.length === 0) {
                console.log("\nRecord not found in database.");
            } else {

                const farmer = results[0];

                console.log("\n\n-[0/']======= RECORD FROM DATABASE =======");
                console.log(`Farmer Number      : ${farmer.farmerNumber}`);
                console.log(`Farmer Name        : ${farmer.farmerName}`);
                console.log(`Produce Type       : ${farmer.produceType}`);
                console.log(`Quantity Delivered : ${farmer.quantityDelivered}`);
                console.log(`Price Per Unit     : KSh ${farmer.pricePerUnit}`);
                console.log(`Payment Status     : ${farmer.paymentStatus}`);
            }

            callback();
        });

    });



}

module.exports = searchFarmer;