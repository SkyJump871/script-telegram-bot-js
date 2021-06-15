/**
 * Check is Group or not
 * @param {*} message 
 * @returns {boolean}
 */
 const isGroup = (message) => {
    return message.chat.type === 'group' ? true : false
}

/**
 * Check if valid url or not
 * @param {string} url
 * @returns {boolean}
 */
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
}

module.exports = {
    isGroup,
    isUrl,
}