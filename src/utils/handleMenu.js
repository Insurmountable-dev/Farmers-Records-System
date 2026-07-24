const callback = require("./callback.js");

// Utility
const showPaymentMenu = require("../utils/showPaymentMenu.js");

// Services
const displayFarmers = require("../services/display.js");
const searchFarmer = require("../services/searchFarmer.js");
const displayPendingPayments = require("../services/displayPendingPayments.js");
const updatePaymentStatus = require("../services/updatePaymentStatus.js");
const highestDelivery = require("../services/highestDelivery.js");
const lowestPayment = require("../services/lowestPayment.js");
const displayLargeDeliveries = require("../services/displayLargeDeliveries.js");
const countProduceCategories = require("../services/countProduceCategories.js");
const paymentsByProduceType = require("../services/paymentsByProduceType.js");
const applyCooperativeLevy = require("../services/applyCooperativeLevy.js");
const generateReport = require("../services/generateReport.js");
const removeInvalidRecords = require("../services/removeInvalidRecords.js");
const saveRecords = require("../services/saveRecords.js");

async function handleMenu(choice, rl, showMenu) {


    switch (Number(choice)) {

        // Display all farmer deliveries
        case 1:
            displayFarmers(() => callback(rl, showMenu));
            break;

        // Search for a farmer
        case 2:
            searchFarmer(rl, () => callback(rl, showMenu));
            break;

        // Calculate farmer payments
        case 3:
            showPaymentMenu();
            break;

        // Display pending payments
        case 4:
            displayPendingPayments(() => callback(rl, showMenu));
            break;

        // Update payment status
        case 5:
            updatePaymentStatus(() => callback(rl, showMenu));
            break;

        // Find highest delivery
        case 6:
            highestDelivery(() => callback(rl, showMenu));
            break;

        // Find lowest payment
        case 7:
            lowestPayment(() => callback(rl, showMenu));
            break;

        // Display large deliveries
        case 8:
            displayLargeDeliveries(() => callback(rl, showMenu));
            break;

        // Count produce categories
        case 9:
            countProduceCategories(() => callback(rl, showMenu));
            break;

        // Calculate payments by produce type
        case 10:
            paymentsByProduceType(() => callback(rl, showMenu));
            break;

        // Apply cooperative levy
        case 11:
            applyCooperativeLevy(() => callback(rl, showMenu));
            break;

        // Generate daily report
        case 12:
            generateReport(() => callback(rl, showMenu));
            break;

        // Remove invalid records
        case 13:
            removeInvalidRecords(rl,() => callback(rl, showMenu));
            break;

        // Save updated records to the database
        case 14:
            saveRecords(() => callback(rl, showMenu));
            break;

        // Exit
        case 15:
            console.log("\nExiting the Farmers Produce Management System...");
            rl.close();
            process.exit(0);
            break;

        default:
            console.log("\n❌ Invalid choice. Please enter a number between 1 and 15.");
            callback(rl, showMenu);
    }
}

module.exports = handleMenu;