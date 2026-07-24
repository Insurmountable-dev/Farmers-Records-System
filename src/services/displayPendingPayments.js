const readFile = require("../utils/readFile.js");
const sleep = require("../utils/Sleep.js");


async function displayPendingPayments(callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");
    const paymentStatuses = await readFile("paymentStatus");


    let found = false;


    for (let i = 0; i < farmerNames.length; i++) {

        if (paymentStatuses[i].toLowerCase() === "pending") {

            console.log("==========================================");
            console.log("          PENDING PAYMENT RECORD");
            console.log("==========================================");
            console.log(`Farmer Number      : ${farmerNumbers[i]}`);
            console.log(`Farmer Name        : ${farmerNames[i]}`);
            console.log(`Produce Type       : ${produceTypes[i]}`);
            console.log(`Quantity Delivered : ${quantities[i]}`);
            console.log(`Price Per Unit     : KSh ${prices[i]}`);
            console.log(`Payment Status     : ${paymentStatuses[i]}`);
            console.log("==========================================\n");


            found = true;

            await sleep(900);
        }
    }


    if (!found) {
        console.log("✅ No Pending Payments Found.");
    }


    callback();

}


module.exports = displayPendingPayments;