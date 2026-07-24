const readFile = require("../utils/readFile.js");
const db = require("../database/db.js");


async function saveRecords(callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");
    const paymentStatuses = await readFile("paymentStatus");


    const sql = `
        UPDATE producedeliveries
        SET 
            farmerName = ?,
            produceType = ?,
            quantityDelivered = ?,
            pricePerUnit = ?,
            paymentStatus = ?
        WHERE farmerNumber = ?
    `;


    for (let i = 0; i < farmerNumbers.length; i++) {


        const values = [
            farmerNames[i],
            produceTypes[i],
            quantities[i],
            prices[i],
            paymentStatuses[i],
            farmerNumbers[i]
        ];


        db.query(sql, values, (err, result) => {

            if (err) {
                console.error("❌ Error Updating Record:", err);
                return;
            }


            console.log(
                `✅ Farmer ${farmerNumbers[i]} Record Updated`
            );

        });

    }


    callback();

}


module.exports = saveRecords;