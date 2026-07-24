const sleep    = require("../utils/Sleep.js");
const readFile = require("../utils/readFile.js");
const payments =  require("../farmerData/data/payments.js");

async function calculatePayments(callback, truth) {

    const farmerNames = await readFile("farmerNames");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");

    for (let i = 0; i < farmerNames.length; i++) {

        // Payment = Quantity Delivered × Price Per Unit
        const payment = quantities[i] * prices[i];

        // Store payment in array
        payments[i]    = payment;

        if(truth) {
            // Display farmer payment
            console.log("==================================");
            console.log(`Farmer Name : ${farmerNames[i]}`);
            console.log(`Payment     : KSh ${payments[i]}`);
            console.log("==================================\n");
        };

       await  sleep(900);
    }

    callback();

}

module.exports = calculatePayments;