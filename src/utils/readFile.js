const fs = require("fs/promises");
const path = require("path");
const fetchData = require("../farmerData/fetchData.js");


async function readFile(filename) {

    const filePath = path.join( __dirname,`../farmerData/data/${filename}.json`);

    try {
        // Try reading file
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);

    } catch (err) {

        if (err.code === "ENOENT") {

            console.log("File does not exist. Fetching from database...");

            await fetchData();

            const data = await fs.readFile(filePath, "utf8");

            return JSON.parse(data);

        }


        throw err;
    }
}


module.exports = readFile;