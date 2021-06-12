module.exports = {
    name: 'say',
    usage: "kirim /say <teks>",
    aliases: ['ulangi'],
    description: "Mengulangi kata yang kamu tulis",
    execute(ctx, message, args, bot) {
        const q = args.join(" ")
        if (!q) return ctx.reply("Apa yang harus saya katakan?")
        ctx.reply(q)
    }
}