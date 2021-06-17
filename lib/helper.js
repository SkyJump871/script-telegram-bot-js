const ytdl = require('ytdl-core')

const chooseFormat = (format, target1, target2) => {
    let status = false
    for (let file of format) {
        status = file.itag == target1 ? true : false
    }
    return status ? ytdl.chooseFormat(format, {quality: target1}) : ytdl.chooseFormat(format, {quality: target2})
}

module.exports = {
    chooseFormat
}