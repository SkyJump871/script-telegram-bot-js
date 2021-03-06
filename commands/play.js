const { getChatId, getMessageId } = require("../function/get")
const { searchYoutubeMusic } = require("../lib/search")

module.exports = {
    name: 'play',
    aliases: ['ytplay', 'ytmusic', 'music'],
    usage: 'kirim /play <judul musik>',
    description: 'Mencari musik dan mendownload musik tersebut dari youtube',
    category: 'Media',
    async execute(bot, message, args) {
        const title = args.join(" ")
        if (title) {
            const data = await searchYoutubeMusic(title)
            const datateks = `『 Youtube Music 』\n\n➥ *Uploader*: ${data.author}\n➥ *Title*: ${data.title}\n➥ *Duration*: ${data.duration}\n➥ *Published*: ${data.uploadDate}\n➥ *Views*: ${data.views}\n➥ *Likes*: ${data.likes}\n➥ *Dislikes*: ${data.dislikes}\n\n*Mohon bersabar, audio akan segera dikirim!*`
            await bot.sendPhoto(getChatId(message), data.thumbnail, {
                caption: datateks,
                reply: getMessageId(message),
                fileName: data.title,
                serverDownload: true,
                parseMode: 'markdown'
            })
            await bot.sendAudio(getChatId(message), data.url, {
                caption: "Here's the audio",
                fileName: data.title  + '.mp3',
                serverDownload: true,
                reply: getMessageId(message)
            })
        } else {
            bot.sendMessage(getChatId(message), "Please send title of music", {
                reply: getMessageId(message),
                parseMode: 'markdown'
            })
        }
    }
}