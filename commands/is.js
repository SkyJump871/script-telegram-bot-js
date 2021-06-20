const { getFromId, getMessageId, getUsername, getChatId } = require("../function/get")

module.exports = {
    name: 'apakah',
    usage: 'apakah <question>',
    category: 'Fun',
    execute(bot, message, args) {
        const question = args.join(" ")
        if (!question) return bot.sendMessage(getChatId(message), "Berikan pertanyaan!", {
            reply: getMessageId(message)
        })
        const answerlist = ["Iya", "Tidak", "Mungkin", "Mungkin tidak", "Tidak tahu", "Tidak mungkin"]
        const answer = answerlist[Math.floor(Math.random() * answerlist.length)]
        const teks = `Dari: ${getUsername(message)}\n*Pertanyaan*: ${question}\n*Jawaban*: ${answer}`
        bot.sendMessage(getChatId(message), teks, {
            parseMode: 'markdown',
            reply: getMessageId(message)
        })
    }
}