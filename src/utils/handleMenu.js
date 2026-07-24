const readline = require("readline");
const callback = require("./callback.js");


// Importing Services..
const displayFarmers = require("../services/display.js");


function handleMenu(choice,rl,showMenu) {


    // Deciding what to do based on user choice

    switch (Number(choice)) {
           case 1:
                displayFarmers(()=>callback(rl,showMenu));
           break;

        case 2:
            console.log("Searching For A Farmer");
            break;

        case 3:
            console.log("Adding A New Farmer");
            break;

        case 4:
            console.log("Updating Farmer Information");
            break;

        case 5:
            console.log("Deleting A Farmer");
            break;

        case 6:
            console.log("Recording Produce Delivery");
            break;

        case 7:
            console.log("Displaying All Produce Deliveries");
            break;

        case 8:
            console.log("Generating Daily Report");
            break;

        case 9:
            console.log("Exiting The System");
            process.exit(0);

            break;
        default:
            console.log("❌ Invalid Choice. Please Select A Valid Option.");
    }
}


module.exports = handleMenu;