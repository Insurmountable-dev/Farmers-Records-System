const readFile = require("../utils/readFile.js");


async function searchFarmer(rl, callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");
    const paymentStatuses = await readFile("paymentStatus");


    rl.question("\nEnter Farmer Number To Search: ", (searchNumber) => {

        let found = false;


        for (let i = 0; i < farmerNumbers.length; i++) {

            if (Number(searchNumber) === farmerNumbers[i]) {

                console.log("\n==================================");
                console.log("        FARMER RECORD FOUND");
                console.log("==================================");
                console.log(`Farmer Number      : ${farmerNumbers[i]}`);
                console.log(`Farmer Name        : ${farmerNames[i]}`);
                console.log(`Produce Type       : ${produceTypes[i]}`);
                console.log(`Quantity Delivered : ${quantities[i]}`);
                console.log(`Price Per Unit     : KSh ${prices[i]}`);
                console.log(`Payment Status     : ${paymentStatuses[i]}`);
                console.log("==================================\n");

                found = true;
                break;
            }
        }


        if (!found) {
            console.log("\n❌ Farmer Not Found\n");
        }


        callback();

    });

}


module.exports = searchFarmer;