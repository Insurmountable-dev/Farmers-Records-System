const sleep    = require("../utils/Sleep.js");
const readFile = require("../utils/readFile.js");

async function calculatePayments(callback) {

    const farmerNames = await readFile("farmerNames");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");

    // Array to store calculated payments
    const payments = [];

    for (let i = 0; i < farmerNames.length; i++) {

        // Payment = Quantity Delivered × Price Per Unit
        const payment = quantities[i] * prices[i];

        // Store payment in array
        payments[i] = payment;

        // Display farmer payment
        console.log("==================================");
        console.log(`Farmer Name : ${farmerNames[i]}`);
        console.log(`Payment     : KSh ${payments[i]}`);
        console.log("==================================\n");

        sleep(900);
    }

    callback();
    return payments;
}

module.exports = calculatePayments;