const calculatePayments = require("../../src/services/calculatePayments.js");
const calculateTotalPayments = require("../services/calculateTotalPayments.js");
const callback = require("./callback.js");

async function handlePaymentMenu(rl, choice, showPaymentMenu) {
  const showMenu = require("../utils/showMenu.js");

  switch (Number(choice)) {
    case 1:
      calculatePayments(() => callback(rl, showMenu),true);
      break;

    case 2:
      calculateTotalPayments(() => callback(rl, showMenu));
      break;

    case 3:
      console.log("Exiting The System...");
      callback(rl, showMenu);
      break;

    default:
      console.log("Invalid choice, please try again.");
      callback(rl, showPaymentMenu);
      break;
  }
}

module.exports = handlePaymentMenu;