const readFile = require("../utils/readFile.js");
const writeFile = require("../utils/writeFile.js");
const db = require("../database/db.js");


async function updatePaymentStatus(callback) {

    // Reading data from JSON files
    const farmerNumbers = await readFile("farmerNumbers");
    const paymentStatuses = await readFile("paymentStatus");
    const payments = await readFile("payments");


    let updated = false;


    // Checking every farmer payment
    for (let i = 0; i < payments.length; i++) {


        // If payment is below 10000 and still pending
        if (
            payments[i] < 10000 &&
            paymentStatuses[i].toLowerCase() === "pending"
        ) {


            // Update local array
            paymentStatuses[i] = "Paid";

            updated = true;


            // SQL update statement
            const sql = `
                UPDATE producedeliveries
                SET paymentStatus = 'Paid'
                WHERE farmerNumber = ?;
            `;


            // Update database
            db.query(
                sql,
                [farmerNumbers[i]],
                (err, result) => {

                    if (err) {
                        console.error(
                            "❌ Database Update Error:",
                            err
                        );
                        return;
                    }


                    console.log(
                        `✅ Farmer ${farmerNumbers[i]} payment status updated`
                    );

                }
            );

        }

    }


    // If no farmer matched the condition
    if (!updated) {

        console.log(
            "\nℹ️  No pending payments below KES 10,000 were found.\n"
        );

    } 
    else {

        // Save updated statuses to JSON file
        await writeFile(
            paymentStatuses,
            "paymentStatus"
        );


        console.log(
            "\n✅ Payment statuses updated successfully.\n"
        );

    }


    callback();

}


module.exports = updatePaymentStatus;