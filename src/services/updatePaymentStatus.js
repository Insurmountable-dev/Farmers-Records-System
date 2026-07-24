const readFile = require("../utils/readFile.js");
const writeFile = require("../utils/writeFile.js");


async function updatePaymentStatus(rl, callback) {

    const farmerNumbers = await readFile("farmerNumbers");
    const paymentStatuses = await readFile("paymentStatus");


    rl.question("\nEnter Farmer Number: ", async (farmerNumber) => {

        let found = false;


        for (let i = 0; i < farmerNumbers.length; i++) {


            if (Number(farmerNumber) === farmerNumbers[i]) {


                rl.question(
                    "Enter New Payment Status (Paid/Pending): ",
                    async (status) => {


                        const newStatus = status.trim();


                        if (
                            newStatus.toLowerCase() !== "paid" &&
                            newStatus.toLowerCase() !== "pending"
                        ) {

                            console.log("❌ Invalid Payment Status");
                            callback();
                            return;
                        }


                        paymentStatuses[i] = newStatus;


                        await writeFile(
                            paymentStatuses,
                            "paymentStatus"
                        );


                        console.log(
                            `✅ Payment Status Updated For Farmer ${farmerNumber}`
                        );


                        found = true;

                        callback();

                    }
                );


                return;
            }

        }


        if (!found) {

            console.log("❌ Farmer Not Found");
            callback();

        }

    });

}


module.exports = updatePaymentStatus;