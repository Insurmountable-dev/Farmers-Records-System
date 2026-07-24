const fs = require("fs");
const path = require("path");

function writeFile(data, filename) {
   
    const filePath = path.join( __dirname,`../farmerData/data/${filename}.json` );

    fs.writeFile(filePath,JSON.stringify(data, null, 2),(err) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(`✅ The File ${filename} Was Created Successfully`); 
        }
    );
}


module.exports = writeFile;