const readFile = require("../utils/readFile.js");
const sleep = require("../utils/Sleep.js");


async function displayLargeDeliveries(callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");
    const paymentStatuses = await readFile("paymentStatus");


    let found = false;


    for (let i = 0; i < farmerNames.length; i++) {


        // Large delivery condition
        if (Number(quantities[i]) >= 100) {


            console.log("==========================================");
            console.log("          LARGE DELIVERY RECORD");
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
        console.log("❌ No Large Deliveries Found.");
    }


    callback();

}


module.exports = displayLargeDeliveries;