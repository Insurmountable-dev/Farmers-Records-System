const readFile = require("../utils/readFile");

async function highestDelivery(callback) {

    const farmerNames = await readFile("farmerNames");
    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");

    let highestIndex = 0;

    for (let i = 1; i < quantities.length; i++) {

        if (quantities[i] > quantities[highestIndex]) {
            highestIndex = i;
        }

    }

    const paymentDue = quantities[highestIndex] * prices[highestIndex];

    console.log("\n==================================");
    console.log("     HIGHEST DELIVERY REPORT");
    console.log("==================================");
    console.log(`Farmer Name        : ${farmerNames[highestIndex]}`);
    console.log(`Produce Type       : ${produceTypes[highestIndex]}`);
    console.log(`Quantity Delivered : ${quantities[highestIndex]}`);
    console.log(`Payment Due        : KSh ${paymentDue}`);
    console.log("==================================\n");

    callback();
}

module.exports = highestDelivery;