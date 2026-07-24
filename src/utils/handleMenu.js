const callback = require("./callback.js");

// Importing Services
const displayFarmers = require("../services/display.js");
const showPaymentMenu = require("../utils/showPaymentMenu.js");
const searchFarmer = require("../services/searchFarmer.js");
const displayPendingPayments = require("../services/displayPendingPayments.js");
const updatePaymentStatus = require("../services/updatePaymentStatus.js");
const displayLargeDeliveries = require("../services/displayLargeDeliveries.js");
const generateReport = require("../services/generateReport.js");
const saveRecords = require("../services/saveRecords.js");


async function handleMenu(choice, rl, showMenu) {

    switch (Number(choice)) {

        case 1:
            displayFarmers(() => callback(rl, showMenu));
            break;


        case 2:
            searchFarmer(rl,() => callback(rl, showMenu));
            break;


        case 3:
            showPaymentMenu();
            break;


        case 4:
            displayPendingPayments(() => callback(rl, showMenu));
            break;


        case 5:
            updatePaymentStatus(rl,() => callback(rl, showMenu));
            break;


        case 6:
            displayLargeDeliveries(() => callback(rl, showMenu));
            break;


        case 7:
            generateReport(() => callback(rl, showMenu));
            break;


        case 8:
            saveRecords(() => callback(rl, showMenu));
            break;


        case 9:
            console.log("Exiting The System...");
            rl.close();
            process.exit(0);
            break;


        default:
            console.log("❌ Invalid Choice. Please Select A Valid Option.");
            callback(rl, showMenu);
    }
}


module.exports = handleMenu;