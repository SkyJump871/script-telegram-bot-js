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

module.exports = {
    getChatId,
    getTitleGroup,
    getUsername,
    getFromId,
    getMessageId
}