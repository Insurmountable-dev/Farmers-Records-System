const readFile = require("../utils/readFile");

async function paymentsByProduceType(callback) {

    const produceTypes = await readFile("produceTypes");
    const quantities = await readFile("quantities");
    const prices = await readFile("prices");

    const produceCategories = [
        "Milk",
        "Coffee",
        "Maize",
        "Potatoes",
        "Vegetables"
    ];

    const totalPayments = [0, 0, 0, 0, 0];

    // Calculate total payment for each produce type
    for (let i = 0; i < produceCategories.length; i++) {

        for (let j = 0; j < produceTypes.length; j++) {

            if (produceCategories[i] === produceTypes[j]) {

                totalPayments[i] += quantities[j] * prices[j];

            }

        }

    }

    console.log("\n======================================");
    console.log(" PAYMENTS BY PRODUCE TYPE");
    console.log("======================================");

    for (let i = 0; i < produceCategories.length; i++) {

        console.log(
            `${produceCategories[i].padEnd(12)} : KES ${totalPayments[i]}`
        );

    }

    console.log("======================================\n");

    callback();
}

module.exports = paymentsByProduceType;