const fs = require("fs/promises");
const path = require("path");


async function writeFile(data, filename) {

    const filePath = path.join(__dirname,  `../farmerData/data/${filename}.json`);

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    // console.log(`✅ The File ${filename} Was Created Successfully`);
}


module.exports = writeFile;