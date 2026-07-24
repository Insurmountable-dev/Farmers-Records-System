const readFile = require("../utils/readFile");

async function lowestPayment(callback) {

    const farmerNames = await readFile("farmerNames");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");

    const payments = [];

    for (let i = 0; i < quantities.length; i++) {
        payments.push(quantities[i] * prices[i]);
    }

    let lowestIndex = 0;

    for (let i = 1; i < payments.length; i++) {

        if (payments[i] < payments[lowestIndex]) {
            lowestIndex = i;
        }

    }

    console.log("\n==================================");
    console.log("      LOWEST PAYMENT REPORT");
    console.log("==================================");
    console.log(`Farmer Name : ${farmerNames[lowestIndex]}`);
    console.log(`Amount Due  : KSh ${payments[lowestIndex]}`);
    console.log("==================================\n");

    console.log("Loop Explanation:");
    console.log("The loop begins by assuming the first payment is the lowest.");
    console.log("It compares every other payment with the current lowest.");
    console.log("Whenever a smaller payment is found, its index becomes the new lowest.");
    console.log("After the loop finishes, the stored index identifies the farmer with the lowest payment.");

    callback();
}

module.exports = lowestPayment;