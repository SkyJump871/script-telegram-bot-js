const { getChatId, getMessageId, getUsername } = require("../function/get")

module.exports = {
    name: 'start',
    usage: 'kirim /start',
    description: 'Perintah pertama saat ingin menggunakan bot',
    category: 'Bot',
    execute(bot, message, args) {
        const teks = `Halo ${getUsername(message)}\nSelamat datang di *Rf* *Bot*.\nKirim /menu atau /help.\nUntuk mendapatkan informasi lebih lanjut!`
        bot.sendMessage(getChatId(message), teks, {
            reply: getMessageId(message),
            parseMode: 'markdown'
        })
    }
}