// Reusable Call Back Function

    function callback (rl,showMenu) {

         rl.question("Press Enter to return to the menu...", () => {
                        showMenu(rl);
        });
    }


module.exports = callback;