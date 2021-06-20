const { getChatId, getMessageId } = require("../function/get")
const { isUrl } = require("../function/validator")
const { getYtMp3 } = require("../lib/downloader")

module.exports = {
    name: 'ytmp3',
    aliases: ['yta', 'youtubemp3'],
    description: 'Mendownload audio dari youtube',
    usage: 'kirim /ytmp3 <url youtube>',
    category: 'Downloader',
    async execute(bot, message, args) {
        const url = args.length !== 0 ? args[0] : ''
        if (!url) return bot.sendMessage(getChatId(message), "Masukan url!", {reply: getMessageId(message)})
        if (isUrl(url) && url.includes('youtu.be') || url.includes('youtube.com/watch?v=')) {
            const data = await getYtMp3(url)
            const datateks = `『 Youtube Audio 』\n\n➥ *Uploader*: ${data.author}\n➥ *Judul*: ${data.title}\n➥ *Durasi*: ${data.duration}\n➥ *Published*: ${data.uploadDate}\n➥ *Views*: ${data.views}\n➥ *Likes*: ${data.likes}\n➥ *Dislikes*: ${data.dislikes}\n\n*Mohon bersabar, audio akan segera dikirim!*`
            await bot.sendPhoto(getChatId(message), data.thumbnails, {
                caption: datateks,
                parseMode: 'markdown',
                serverDownload: true,
                reply: getMessageId(message),
                fileName: data.title
            })
            await bot.sendAudio(getChatId(message), data.url, {
                serverDownload: true,
                fileName: data.title + '.mp3',
                caption: "Nih audionya",
                parseMode: 'markdown'
            })
        } else {
            bot.sendMessage(getChatId(message), "Link yang kamu kirim salah!", {
                parseMode: 'markdown',
                reply: getMessageId(message)
            })
        }
    } 
}