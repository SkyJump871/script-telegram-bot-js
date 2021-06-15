module.exports = {
    name: 'say',
    usage: "send /say <text>",
    aliases: ['repeat'],
    category: 'Basic',
    description: "Repeat what are you writing",
    execute(bot, message, args) {
        const q = args.join(" ")
        if (!q) return ctx.reply("What should i say?")
        bot.sendMessage(message.chat.id, q)
    }
}