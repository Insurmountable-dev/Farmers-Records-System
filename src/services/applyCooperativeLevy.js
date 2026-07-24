const readFile = require("../utils/readFile");

async function applyCooperativeLevy(callback) {

    const farmerNames = await readFile("farmerNames");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");

    const grossPayments = [];
    const levies = [];
    const netPayments = [];

    // Calculate gross payment, levy and net payment
    for (let i = 0; i < farmerNames.length; i++) {

        const grossPayment = quantities[i] * prices[i];
        const levy = grossPayment * 0.02;
        const netPayment = grossPayment - levy;

        grossPayments.push(grossPayment);
        levies.push(levy);
        netPayments.push(netPayment);

    }

    console.log("\n==============================================================");
    console.log("             COOPERATIVE LEVY REPORT");
    console.log("==============================================================");

    for (let i = 0; i < farmerNames.length; i++) {

        console.log(`Farmer Name   : ${farmerNames[i]}`);
        console.log(`Gross Payment : KES ${grossPayments[i].toFixed(2)}`);
        console.log(`Levy (2%)     : KES ${levies[i].toFixed(2)}`);
        console.log(`Net Payment   : KES ${netPayments[i].toFixed(2)}`);
        console.log("--------------------------------------------------------------");

    }

    callback();
}

module.exports = applyCooperativeLevy;