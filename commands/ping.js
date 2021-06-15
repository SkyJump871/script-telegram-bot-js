const { getFromId, getMessageId } = require("../function/get")

module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: "Send ping Messages",
    category: 'Basic',
    usage: 'send /ping',
    execute(bot, message, args) {
        bot.sendMessage(getFromId(message), "Pong!", {
            reply: getMessageId(message),
            parse: 'markdown'
        })
    }
}