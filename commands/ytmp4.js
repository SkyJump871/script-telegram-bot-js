const { getChatId, getMessageId } = require("../function/get")
const { isUrl } = require("../function/validator")
const { getYtMp4 } = require("../lib/downloader")

module.exports =  {
    name: 'ytmp4',
    usage: 'send /ytmp4 <url youtube>',
    description: 'Download youtube video',
    aliases: ['ytv', 'youtubemp4', 'ytvideo'],
    category: 'Downloader',
    async execute(bot, message, args) {
        const url = args.length !== 0 ? args[0] : ''
        if (isUrl(url) && url.includes('youtu.be') || url.includes('youtube.com/watch?v=')) {
            const data = await getYtMp4(url)
            const datateks = `『 Youtube Video 』\n\n➥ *Author*: ${data.author}\n➥ *Title*: ${data.title}\n➥ *Duration*: ${data.duration}\n➥ *Published*: ${data.uploadDate}\n➥ *Views*: ${data.views}\n➥ *Likes*: ${data.likes}\n➥ *Dislikes*: ${data.dislikes}\n\n*Please wait, video will be sending soon!*`
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
                caption: "Here's the video"
            })
        } else {
            bot.sendMessage(getChatId(message), "That's not a youtube link!", {
                reply: getMessageId(message)
            })
        }
    }
}