const readFile = require("../utils/readFile");

async function countProduceCategories(callback) {

    const produceTypes = await readFile("produceTypes");

    const produceCategories = [
        "Milk",
        "Coffee",
        "Maize",
        "Potatoes",
        "Vegetables"
    ];

    const produceCounts = [0, 0, 0, 0, 0];

    // Count the number of farmers for each produce type
    for (let i = 0; i < produceTypes.length; i++) {

        for (let j = 0; j < produceCategories.length; j++) {

            if (produceTypes[i] === produceCategories[j]) {
                produceCounts[j]++;
                break;
            }

        }

    }

    console.log("\n======================================");
    console.log("      PRODUCE CATEGORY COUNTS");
    console.log("======================================");

    for (let i = 0; i < produceCategories.length; i++) {

        console.log(
            `${produceCategories[i].padEnd(12)} : ${produceCounts[i]} farmer(s)`
        );

    }

    console.log("======================================\n");

    callback();
}

module.exports = countProduceCategories;