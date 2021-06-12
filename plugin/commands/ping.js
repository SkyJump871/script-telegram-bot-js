module.exports = {
    name: 'ping',
    aliases: ['pong'],
    execute(ctx, message, args, bot) {
        ctx.reply("Pong!")
    }
}