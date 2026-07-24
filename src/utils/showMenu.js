const readline = require("readline");
const handleMenu = require("./handleMenu");

// Creating CLI Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {

    // Uncomment the next line if you want to clear the terminal
    // console.clear();

    console.log("==================================================");
    console.log("        NYERI GREEN FARMERS COOPERATIVE");
    console.log("       Farmers Produce Management System");
    console.log("==================================================");

    console.log("1. Display all farmer deliveries");
    console.log("2. Search for a farmer");
    console.log("3. Calculate farmer payments");
    console.log("4. Display pending payments");
    console.log("5. Update payment status");
    console.log("6. Find highest delivery");
    console.log("7. Find lowest payment");
    console.log("8. Display large deliveries");
    console.log("9. Count produce categories");
    console.log("10. Calculate payments by produce type");
    console.log("11. Apply cooperative levy");
    console.log("12. Generate daily report");
    console.log("13. Remove invalid records");
    console.log("14. Save updated records to database");
    console.log("15. Exit");

    rl.question("\nEnter your choice (1-15): ", (choice) => {
        handleMenu(choice, rl, showMenu);
    });
}

module.exports = showMenu;