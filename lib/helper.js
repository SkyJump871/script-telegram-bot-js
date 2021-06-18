const ytdl = require('ytdl-core')
const parse = require('parse-duration')

const chooseFormat = (format, target1, target2) => {
    let status = false
    for (let file of format) {
        status = file.itag == target1 ? true : false
    }
    return status ? ytdl.chooseFormat(format, {quality: target1}) : ytdl.chooseFormat(format, {quality: target2})
}


const hmsToSeconds = (number) => {
    let p = number.split(':')
    let s = 0, m = 1
    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10)
        m *= 60
    }
    return s
}

const durationFilters = (minimum, maximum) => {
    let minimal = minimum;
    if (typeof minimum === 'string') {
        minimal = hmsToSeconds(minimum)
    }
    return minimal
}

module.exports = {
    chooseFormat,
    hmsToSeconds,
    durationFilters
}