const readFile = require("../utils/readFile");

async function removeInvalidRecords(callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");

    console.log("\n=================================================");
    console.log("          INVALID FARMER RECORDS");
    console.log("=================================================");

    let invalidFound = false;

    // Loop through all records
    for (let i = 0; i < farmerNumbers.length; i++) {

        if (
            !farmerNumbers[i] ||
            quantities[i] <= 0 ||
            prices[i] <= 0
        ) {

            console.log(`Farmer Number      : ${farmerNumbers[i] || "Missing"}`);
            console.log(`Farmer Name        : ${farmerNames[i]}`);
            console.log(`Quantity Delivered : ${quantities[i]}`);
            console.log(`Price Per Unit     : KES ${prices[i]}`);
            console.log("-----------------------------------------------");

            invalidFound = true;
        }

    }

    if (!invalidFound) {
        console.log("No invalid records found.");
    }

    console.log("\nSQL DELETE Statement:");
    console.log(`
DELETE FROM ProduceDeliveries
WHERE farmerNumber = ?;
    `);

    console.log("Explanation:");
    console.log("- The program should request confirmation before deleting a record.");
    console.log("- Deleting a record permanently removes it from the database.");
    console.log("- An invalid record may simply contain a data-entry error that can be corrected.");
    console.log("- Confirmation by the cooperative manager prevents accidental loss of important data and maintains database integrity.");

    callback();
}

module.exports = removeInvalidRecords;