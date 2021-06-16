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

module.exports = {
    filter: {
        addFilter,
        isFiltered,
    },
    color,
    randomNumber,
    processTime,
}