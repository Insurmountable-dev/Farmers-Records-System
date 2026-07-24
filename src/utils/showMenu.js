const readline = require("readline");
const handleMenu = require("./handleMenu");

// Creating A CLI Interaface
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function showMenu() {

    console.clear();

    console.log("======================================");
    console.log(" NYERI GREEN FARMERS COOPERATIVE");
    console.log(" Farmers Produce Management System");
    console.log("======================================");
  
    console.log("1. Display all farmer deliveries");
    console.log("2. Search for a farmer");
    console.log("3. Calculate farmer payments");
    console.log("4. Display pending payments");
    console.log("5. Update payment status");
    console.log("6. Display large deliveries");
    console.log("7. Generate daily report");
    console.log("8. Save updated records to database");
    console.log("9. Exit");

    rl.question("\nEnter your choice (1-9): ", (choice) => {
        handleMenu(choice, rl, showMenu);
    });
}

module.exports = showMenu;