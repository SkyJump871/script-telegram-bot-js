const { getChatId, getMessageId } = require("../function/get")

module.exports = {
    name: 'start',
    usage: 'send /start',
    description: 'First Commands to Start Bot',
    category: 'Startup',
    execute(bot, message, args) {
        bot.sendMessage(getChatId(message), "Selamat datang di Rf Bot kirim /menu\nUntuk melihat fitur yang kami sediakan", {
            reply: getMessageId(message)
        })
    }
}