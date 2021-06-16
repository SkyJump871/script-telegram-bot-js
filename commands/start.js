const { getChatId, getMessageId, getUsername } = require("../function/get")

module.exports = {
    name: 'start',
    usage: 'send /start',
    description: 'First Commands to Start Bot',
    category: 'Basic',
    execute(bot, message, args) {
        bot.sendMessage(getChatId(message), `Hello *${getUsername(message)}*\nWelcome to *RF* *Bot*\nsend /menu for check all features in RF Bot`, {
            reply: getMessageId(message),
            parseMode: 'markdown'
        })
    }
}