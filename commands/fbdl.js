const FBDL = require("fbdl-core")
const { getChatId, getMessageId } = require("../function/get")
const { getFbVideo } = require("../lib/downloader")

module.exports = {
    name: 'fbdl',
    usage: 'kirim /fbdl <url youtube>',
    description: 'Mendownload video dari facebook',
    category: 'Downloader',
    async execute(bot, message, args) {
        const url = args.length !== 0 ? args[0] : ''
        if (!url) return bot.sendMessage(getChatId(message), "Masukan url!", {reply: getMessageId(message)})
        if (FBDL.validateURL(url)) {
            const data = await getFbVideo(url)
            const teks = `『 Facebook Downloader 』\n➥ *Uploader*: ${data.author.name}\n➥ *Judul*: ${data.title}\n➥ *Durasi*: ${data.duration}\n*Mohon bersabar, media akan segera dikirim!*`
            bot.sendPhoto(getChatId(message), data.thumbnail, {
                caption: teks,
                parseMode: 'markdown',
                serverDownload: true,
                reply: getMessageId(message)
            })
            bot.sendVideo(getChatId(message), data.rawVideo, {
                reply: getMessageId(message),
                caption: 'Nih videonya!',
                serverDownload: true
            })
        } else {
            bot.sendMessage(getChatId(message), "Link yang anda masukan bukan link facebook video!", {
                reply: getMessageId(message)
            })   
        }
    }
}