const { 
    sendText,
} = require('../function/send')

module.exports = {
    name: 'say',
    usage: "send /say <text>",
    aliases: ['repeat'],
    category: 'Basic',
    description: "Repeat what are you writing",
    execute(ctx, message, args, bot) {
        const q = args.join(" ")
        if (!q) return ctx.reply("What should i say?")
        sendText(ctx, q)
    }
}