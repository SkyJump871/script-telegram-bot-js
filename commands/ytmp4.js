const { getChatId, getMessageId } = require("../function/get")
const { isUrl } = require("../function/validator")
const { getYtMp4 } = require("../lib/downloader")

module.exports =  {
    name: 'ytmp4',
    usage: 'kirim /ytmp4 <url youtube>',
    description: 'Mendownload video dari youtube',
    aliases: ['ytv', 'youtubemp4', 'ytvideo'],
    category: 'Downloader',
    async execute(bot, message, args) {
        const url = args.length !== 0 ? args[0] : ''
        if (!url) return bot.sendMessage(getChatId(message), "Masukan url!", {reply: getMessageId(message)})
        if (isUrl(url) && url.includes('youtu.be') || url.includes('youtube.com/watch?v=')) {
            const data = await getYtMp4(url)
            const datateks = `『 Youtube Video 』\n\n➥ *Uploader*: ${data.author}\n➥ *Judul*: ${data.title}\n➥ *Durasi*: ${data.duration}\n➥ *Published*: ${data.uploadDate}\n➥ *Views*: ${data.views}\n➥ *Likes*: ${data.likes}\n➥ *Dislikes*: ${data.dislikes}\n\n*Mohon bersabar, video akan segera dikirim!*`
            await bot.sendPhoto(getChatId(message), data.thumbnails, {
                serverDownload: true,
                reply: getMessageId(message),
                caption: datateks,
                fileName: data.title,
                parseMode: 'markdown'
            })
            await bot.sendVideo(getChatId(message), data.url, {
                serverDownload: true,
                reply: getMessageId(message),
                fileName: data.title,
                caption: "Nih videonya"
            })
        } else {
            bot.sendMessage(getChatId(message), "Itu bukan link youtube!", {
                reply: getMessageId(message)
            })
        }
    }
}