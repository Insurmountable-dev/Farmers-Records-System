const handlePaymentMenu = require("./handlePaymentMenu");




function showPaymentMenu () {
const {rl} =  require("./showMenu");

        
    console.log("\n💰 FARMER PAYMENT MENU 💰");
    console.log("--------------------------------");
    console.log("1. Calculate Each Farmer's Payment");
    console.log("2. Calculate Total Amount Paid To Farmers");
    console.log("3. Return To Main Menu");
    console.log("--------------------------------");

    rl.question("Select Payment To Generate..(1-3)", (choice)=> {
        handlePaymentMenu(rl,choice,showPaymentMenu)
    });

}


module.exports = showPaymentMenu;