const readline = require("readline");
const showMenu = require("./src/utils/showMenu.js")


// Creating A CLI Interaface
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


async function app() {

    showMenu(rl);

}




app();