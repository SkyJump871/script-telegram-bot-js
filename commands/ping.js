const { getFromId, getMessageId, getChatId } = require("../function/get")

module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: "Mengirim pesan ping",
    category: 'Bot',
    usage: 'kirim /ping',
    execute(bot, message, args) {
        bot.sendMessage(getChatId(message), "Pong!", {
            reply: getMessageId(message),
            parse: 'markdown'
        })
    }
}