const fs = require('fs');

/**
 * Load dir array files
 * @param {*} directoryPath 
 * @param {string[]} arrayFiles
 * @returns {string[]} 
 */
const loadAllDirFiles = (directoryPath, arrayFiles) => {
    const files = fs.readdirSync(directoryPath)
    arrayFiles = arrayFiles || []
    files.forEach((file) => {
        if (fs.statSync(directoryPath + '/' + file).isDirectory()) {
            arrayFiles = loadAllDirFiles(directoryPath + '/' + file, arrayFiles)
        } else {
            arrayFiles.push(file)
        }
    })
    return arrayFiles
}

module.exports = {
    loadAllDirFiles
}