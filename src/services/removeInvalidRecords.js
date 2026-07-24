const readFile = require("../utils/readFile");
const db = require("../database/db");


async function removeInvalidRecords(rl,callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");


    console.log("\n=================================================");
    console.log("          INVALID FARMER RECORDS");
    console.log("=================================================");


    let invalidFound = false;
    let invalidRecords = [];


    // Get the largest file size
    const totalRecords = Math.max(
        farmerNumbers.length,
        farmerNames.length,
        quantities.length,
        prices.length
    );


    // Check every record
    for (let i = 0; i < totalRecords; i++) {


        const farmerNumber = farmerNumbers[i];
        const farmerName = farmerNames[i];
        const quantity = Number(quantities[i]);
        const price = Number(prices[i]);


        if (
            !farmerNumber ||
            quantity <= 0 ||
            price <= 0
        ) {


            console.log(`Farmer Number      : ${farmerNumber || "Missing"}`);
            console.log(`Farmer Name        : ${farmerName || "Missing"}`);
            console.log(`Quantity Delivered : ${quantity}`);
            console.log(`Price Per Unit     : KES ${price}`);
            console.log("-----------------------------------------------");


            invalidRecords.push({
                farmerNumber,
                index: i
            });


            invalidFound = true;
        }

    }



    if (!invalidFound) {

        console.log("No invalid records found.");
        callback();
        return;

    }



    console.log("\nSQL DELETE STATEMENTS:");



    invalidRecords.forEach(record => {


        if (!record.farmerNumber) {

            console.log(`
DELETE FROM ProduceDeliveries
WHERE farmerNumber IS NULL;
`);

        } else {

            console.log(`
DELETE FROM ProduceDeliveries
WHERE farmerNumber = ${record.farmerNumber};
`);

        }

    });



    console.log("=================================================");
    console.log("WARNING");
    console.log("Deleting records permanently removes them.");
    console.log("Invalid records may contain data-entry mistakes.");
    console.log("Confirmation is required before deletion.");
    console.log("=================================================");


    rl.question(
        "\nDo you want to delete invalid records? (Y/N): ",
        (answer)=> {


            if(answer.toLowerCase() === "y") {


                const sql = `
                DELETE FROM ProduceDeliveries
                WHERE farmerNumber IS NULL
                OR quantityDelivered <= 0
                OR pricePerUnit <= 0
                `;



                db.query(sql, (err,result)=> {


                    if(err){

                        console.log("Deletion failed:", err.message);

                    }else{

                        console.log(
                            `${result.affectedRows} invalid records deleted successfully.`
                        );

                    }


                    callback();

                });


            }else{


                console.log("Deletion cancelled.");

                callback();

            }


        }
    );

}



module.exports = removeInvalidRecords;