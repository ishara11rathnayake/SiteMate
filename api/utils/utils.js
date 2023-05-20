const fs = require("fs");
const {join, basename, dirname} = require("path");

async function saveDataToFile(filename, data) {
    const currentDirectory = __dirname;
    const topLevelDirectoryName = basename(dirname(currentDirectory));
    const filePath = join(topLevelDirectoryName, 'data', filename);

    await fs.promises.writeFile(
        filePath,
        JSON.stringify(data, null, 2),
        "utf8"
    );
}

async function readDataFromFile(filename) {
    const currentDirectory = __dirname;
    const topLevelDirectoryName = basename(dirname(currentDirectory));
    const filePath = join(topLevelDirectoryName, 'data', filename);
    return JSON.parse(await fs.promises.readFile(filePath, "utf8"));
}

module.exports = { saveDataToFile, readDataFromFile };
