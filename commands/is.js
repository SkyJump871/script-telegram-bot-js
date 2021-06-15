const { getFromId, getMessageId, getUsername, getChatId } = require("../function/get")

module.exports = {
    name: 'is',
    usage: 'is <question>',
    aliases: ['are'],
    category: 'Fun',
    execute(bot, message, args) {
        const question = args.join(" ")
        if (!question) return bot.sendMessage(getChatId(message), "Please send your Question", {
            reply: getMessageId(message)
        })
        const answerlist = ["yes", "no", "probably", "i don't know", "probably not"]
        const answer = answerlist[Math.floor(Math.random() * answerlist.length)]
        const teks = `From: ${getUsername(message)}\n*Question*: ${question}\n*Answer*: ${answer}`
        bot.sendMessage(getChatId(message), teks, {
            parseMode: 'markdown',
            reply: getMessageId(message)
        })
    }
}