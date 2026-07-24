require("dotenv").config();

const fetchData = require("./src/farmerData/fetchData.js");
const {showMenu} = require("./src/utils/showMenu");

async function start() {

    await fetchData();

    showMenu();

}

start();