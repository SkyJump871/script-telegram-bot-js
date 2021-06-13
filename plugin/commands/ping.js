module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: "Send ping Messages",
    category: 'Basic',
    usage: 'send /ping',
    execute(ctx, message, args, bot) {
        ctx.reply("Pong!")
    }
}