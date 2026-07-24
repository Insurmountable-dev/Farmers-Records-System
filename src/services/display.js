const readFile = require("../utils/readFile.js");
const sleep    = require("../utils/Sleep.js");

async function displayFarmers(callback) {

    // Reading The Data 
    const farmerNumbers = await readFile("farmerNumbers");
    const farmerNames = await readFile("farmerNames");
    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");
    const paymentStatuses = await readFile("paymentStatus");

    for (let i = 0; i < farmerNumbers.length; i++) {

        console.log("==========================================");
        console.log(`Farmer Number     : ${farmerNumbers[i]}`);
        console.log(`Farmer Name       : ${farmerNames[i]}`);
        console.log(`Produce Type      : ${produceTypes[i]}`);
        console.log(`Quantity Delivered: ${quantities[i]}`);
        console.log(`Price Per Unit    : KSh ${prices[i]}`);
        console.log(`Payment Status    : ${paymentStatuses[i]}`);
        console.log("==========================================");

        await sleep(900);
    }

    callback();

}



module.exports = displayFarmers;



