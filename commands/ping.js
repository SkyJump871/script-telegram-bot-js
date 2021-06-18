const { getFromId, getMessageId, getChatId } = require("../function/get")

module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: "Send ping Messages",
    category: 'Bot',
    usage: 'send /ping',
    execute(bot, message, args) {
        bot.sendMessage(getChatId(message), "Pong!", {
            reply: getMessageId(message),
            parse: 'markdown'
        })
    }
}