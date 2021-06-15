const fs = require('fs')
const dir = JSON.parse(fs.readFileSync('../database/user.json'))

/**
 * Add user to Database
 * @param {number} userId 
 * @param {string} userName 
 * @param {Date} date 
 * @param {string} serial 
 */
const addUserToDatabase = (userId, userName, date, serial) => {
    const obj = { id: userId, name: userName, date: date, serial: serial }
    dir.push(obj)
    fs.writeFileSync(dir, JSON.stringify(obj, null, 2))
}

/**
 * Check if User is added
 * @param {number} userId 
 * @returns {boolean}
 */
const checkRegisteredUser = (userId) => {
    let status = false
    Object.keys(dir).forEach((i) => {
        if (dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Get registered User Id
 * @param {number} userId 
 * @returns {string}
 */
const getRegisteredUserId = (userId) => {
    let pos = null
    Object.keys(dir).forEach((i) => {
        if (dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        return dir[pos].id
    }
}

module.exports = {
    addUserToDatabase,
    checkRegisteredUser,
    getRegisteredUserId
}