const { getChatId, getMessageId } = require("../function/get")

module.exports = {
    name: 'say',
    usage: "send /say <text>",
    aliases: ['repeat'],
    category: 'Basic',
    description: "Repeat what are you writing",
    execute(bot, message, args) {
        const q = args.join(" ")
        if (!q) return bot.sendMessage(getChatId(message), "What should i say?", {reply: getMessageId(message)})
        bot.sendMessage(message.chat.id, q, {
            reply: getMessageId(message)
        })
    }
}