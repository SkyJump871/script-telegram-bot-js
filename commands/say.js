const { getChatId, getMessageId } = require("../function/get")

module.exports = {
    name: 'say',
    usage: "kirim /say <teks>",
    aliases: ['repeat', 'ulangi'],
    category: 'Fun',
    description: "Mengulangi kata yang kamu tulis",
    execute(bot, message, args) {
        const q = args.join(" ")
        if (!q) return bot.sendMessage(getChatId(message), "Apa yang harus saya katakan?", {reply: getMessageId(message)})
        bot.sendMessage(message.chat.id, q, {
            reply: getMessageId(message)
        })
    }
}