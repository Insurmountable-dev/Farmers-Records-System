const calculatePayments = require("./calculatePayments");
const readFile = require("../utils/readFile.js");


async function calculateTotalPayments(callback) {

    const payments = await readFile("payments");

    console.log("\nCalculating Payments...🔃\n🔃 This May Take A While.......");
    await calculatePayments(() =>{}, false);

    let totalPayments = 0;

    for (let i = 0; i < payments.length; i++) {

        totalPayments += payments[i];

    }

    console.log(`
==========================================
          💰 PAYMENT SUMMARY 💰
==========================================
Total Amount Payable : KES ${totalPayments}
==========================================
`);


    callback();

}


module.exports = calculateTotalPayments;