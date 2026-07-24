const readFile = require("../utils/readFile.js");


async function generateReport(callback) {

    const farmerNames = await readFile("farmerNames");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");
    const paymentStatuses = await readFile("paymentStatus");


    let totalQuantity = 0;
    let totalPayments = 0;
    let paidFarmers = 0;
    let pendingFarmers = 0;


    for (let i = 0; i < farmerNames.length; i++) {

        const quantity = Number(quantities[i]);
        const price = Number(prices[i]);

        // Total produce delivered
        totalQuantity += quantity;


        // Calculate total payments
        totalPayments += quantity * price;


        // Count payment status
        if (paymentStatuses[i].toLowerCase() === "paid") {
            paidFarmers++;
        } 
        else if (paymentStatuses[i].toLowerCase() === "pending") {
            pendingFarmers++;
        }

    }


    console.log("\n==========================================");
    console.log("              DAILY FARM REPORT");
    console.log("==========================================");
    console.log(`Total Farmers        : ${farmerNames.length}`);
    console.log(`Total Quantity       : ${totalQuantity}`);
    console.log(`Total Payments       : KSh ${totalPayments}`);
    console.log(`Paid Farmers         : ${paidFarmers}`);
    console.log(`Pending Payments     : ${pendingFarmers}`);
    console.log("==========================================\n");


    callback();

}


module.exports = generateReport;