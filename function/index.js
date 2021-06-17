const chalk = require('chalk')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

/**
 * Get Color Text
 * @param {string} text 
 * @param {string} [color] 
 */
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

/**
 * Get Random Number / Interger
 * @param {number} length 
 * @returns {number}
 */
const randomNumber = (length) => {
    const numberlist = '1234567890'
    if (typeof length != 'number') {
        return "Masukan type data Number"
    }
    if (!length) {
        length = Math.floor(Math.random() * numberlist.length)
    }
    var results = ''
    for (let i = 0; i < length; i++) {
        results += numberlist.charAt(Math.floor(Math.random() * numberlist.length))
    }
    return results
}

/**
 * Get Random String
 * @param {number} length 
 * @returns {string}
 */
const randomString = (length) => {
    const numberlist = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz'
    if (typeof length != 'number') {
        return "Masukan type data Number"
    }
    if (!length) {
        length = Math.floor(Math.random() * numberlist.length)
    }
    var results = ''
    for (let i = 0; i < length; i++) {
        results += numberlist.charAt(Math.floor(Math.random() * numberlist.length))
    }
    return results
}

/**
 * Get process time
 * @param {Date} timestamp 
 * @param {Date} now
 * @returns {number}
 */
const processTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

const recentsCommands = new Set();

/**
 * Check is id filtered
 * @param {number} id 
 * @returns {boolean}
 */
const isFiltered = (id) => {
    return !!recentsCommands.has(id)
}

/**
 * Add id to filter
 * @param {number} id 
 */
const addFilter = (id) => {
    recentsCommands.add(id)
    setTimeout(() => {
        return recentsCommands.delete(id)
    }, 5000);
}

/**
 * Number to tier
 * @param {number} number
 * @returns {string} 
 */
const numberFormatting = (number) => {
    const tierlist = ["", " Thousand", " Million", " Billion", " Trillion"]
    const tier = Math.log10(Math.abs(number)) / 3 | 0
    if (tier == 0) return number
    let postfix = tierlist[tier]
    let scale = Math.pow(10, tier * 3)
    let scaled = number / scale
    let formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted)) {
        formatted = formatted.substr(0, formatted.length - 2)
    }
    return formatted + postfix
}

module.exports = {
    filter: {
        addFilter,
        isFiltered,
    },
    color,
    randomNumber,
    processTime,
    numberFormatting,
}