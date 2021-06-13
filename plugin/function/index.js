class Chats {
    /**
     * ==================
     * Get Chat Id
     * @param {*} message 
     * @returns {number}
     * ==================
     */
    getChatId(message) {
        return message.chat.id
    }
    /**
     * ==================
     * Get title group
     * @param {*} message
     * @returns {any}
     * ==================
     */
    getTitleGroup(message) {
        return message.chat.title ? message.chat.title : "Bukan Grup"
    }
    /**
     * ==================
     * Check is Group or not
     * @param {*} message 
     * @returns {boolean}
     * ==================
     */
    isGroup(message) {
        const type = message.chat.type
        return type == 'group' ? true : false
    }
}

class From {
    /**
     * ==================
     * check is bot or not
     * @param {*} message 
     * @returns {boolean}
     * ==================
     */
    isBot(message) {
        return message.from.is_bot
    }
    /**
     * ==================
     * Get Id
     * @param {*} message 
     * @returns {number}
     * ==================
     */
    getFromId(message) {
        return message.from.id
    }
    /**
     * ==================
     * Get Username
     * @param {*} message 
     * @returns {number}
     * ==================
     */
    getUsername(message) {
        return message.from.username
    }
}

module.exports = {
    Chats,
    From
}