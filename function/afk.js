const fs = require('fs')
const dir = JSON.parse(fs.readFileSync('../database/afk.json'))

/**
 * Add Afk User
 * @param {number} userId 
 * @param {string} date 
 * @param {string} reason 
 */
const addAfkUser = (userId, date, reason) => {
    const obj = { id: userId, date: date, reason: reason }
    dir.push(obj)
    fs.writeFileSync('../database/afk.json', JSON.stringify(dir, null, 2))
}

/**
 * Check if user in afk database
 * @param {number} userId 
 * @returns {boolean}
 */
const checkAfkUser = (userId) => {
    let status = false
    Object.keys(dir).forEach((i) => {
        if (dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Get afk reason
 * @param {number} userId
 * @returns {string} 
 */
const getAfkReason = (userId) => {
    let pos = null
    Object.keys(dir).forEach((i) => {
        if (dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        return dir[pos].reason
    }
}

/**
 * Get afk date
 * @param {number} userId 
 * @returns {string}
 */
const getAfkDate = (userId) => {
    let pos = null
    Object.keys(dir).forEach((i) => {
        if (dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        return dir[pos].date
    }
}

/**
 * Get afk id
 * @param {number} userId 
 * @returns {number}
 */
const getAfkId = (userId) => {
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

/**
 * Get afk position
 * @param {number} userId 
 * @returns {number}
 */
const getAfkPosition = (userId) => {
    let pos = null
    Object.keys(dir).forEach((i) => {
        if (dir[i].id === userId) {
            pos = i
        }
    })
    return pos
}

module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkDate,
    getAfkId,
    getAfkReason,
    getAfkPosition
}