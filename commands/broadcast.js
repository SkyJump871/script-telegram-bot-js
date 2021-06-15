const { getChatId, getMessageId, getUsername } = require("../function/get")
const { isOwner } = require("../function/validator")

module.exports = {
    name: 'broadcast',
    aliases: ['bc'], 
    category: 'Utility',
    usage: 'send /broadcast message',
    description: 'Send Broadcast message to all chat in Bot',
    execute(bot, message, args) {
        const teksbc = args.join(" ")
        if (!teksbc) return bot.sendMessage(message.chat.id, "Please enter your broadcast message", {
            reply: getMessageId(message)
        })
        if (!isOwner(getUsername(message))) return bot.sendMessage(getChatId(message), "You don't have permission to do this", {
            reply: getMessageId(message)
        })
        console.log(bot)
        bot.sendMessage(getChatId(message), "Sukses", {
            reply: getMessageId(message)
        })
    }
}