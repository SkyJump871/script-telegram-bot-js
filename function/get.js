const axios = require('axios').default
const fs = require('fs')

/**
 * Get Chat Id
 * @param {*} message 
 * @returns {number}
 */
 const getChatId = (message) => {
    return message.chat.id
}

/**
 * Get title Group
 * @param {*} message 
 * @returns {string}
 */
const getTitleGroup = (message) => {
    return message.chat.title ? message.chat.title : "Not a Group"
}

/**
 * Get Username
 * @param {*} message 
 * @returns {string}
 */
const getUsername = (message) => {
    return message.from.username
}

/**
 * Get From Id
 * @param {*} message 
 * @returns {number}
 */
const getFromId = (message) => {
    return message.from.id
}

/**
 * Get Message Id
 * @param {*} message 
 * @returns {number}
 */
const getMessageId = (message) => {
    return message.message_id
}

/**
 * Get download files
 * @param {string} fileId 
 * @param {object} path 
 */
const getDownloadFiles = async (bot, fileId, path) => {
    const validPath = path.endsWith('/') ? path : `${path}/`
    const data = await bot.getFile(fileId)
    const resultsPath = `${validPath}${data.file_unique_id}`
    const dataFiles = await axios.get(data.fileLink, {
        responseType: 'arraybuffer'
    })
    fs.writeFileSync(resultsPath, dataFiles.data)
    return resultsPath
}

module.exports = {
    getChatId,
    getTitleGroup,
    getUsername,
    getFromId,
    getMessageId
}