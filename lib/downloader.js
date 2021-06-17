const ytdl = require('ytdl-core');
const moment = require('moment-timezone');
const { numberFormatting } = require('../function');
const { chooseFormat } = require('./helper');

const getYtMp3 = async (url) => {
    const info = await ytdl.getInfo(url)
    const formats = ytdl.filterFormats(info.formats, 'audioonly')
    const { videoDetails } = info
    const { title, lengthSeconds, viewCount, likes, dislikes, ownerChannelName, thumbnails, uploadDate } = videoDetails
    const thumbs = thumbnails[Math.floor(Math.random() * thumbnails.length)].url
    const durations = moment(lengthSeconds * 1000).format('mm:ss')
    const urlAudio = formats[Math.floor(Math.random() * formats.length)].url
    const results = {
        author: ownerChannelName,
        title: title,
        duration: durations,
        thumbnails: thumbs,
        uploadDate: uploadDate,
        views: numberFormatting(viewCount),
        likes: numberFormatting(likes),
        dislikes: numberFormatting(dislikes),
        url: urlAudio
    }
    return results
}

const getYtMp4 = async (url) => {
    const info = await ytdl.getInfo(url)
    const formats = chooseFormat(info.formats, '22', '18')
    // Video Info
    const { videoDetails } = info
    const { title, lengthSeconds, viewCount, likes, dislikes, ownerChannelName, thumbnails, uploadDate } = videoDetails
    const thumbs = thumbnails[Math.floor(Math.random() * thumbnails.length)].url
    const durations = moment(lengthSeconds * 1000).format('mm:ss')
    const results = {
        author: ownerChannelName,
        title: title,
        duration: durations,
        thumbnails: thumbs,
        uploadDate: uploadDate,
        views: numberFormatting(viewCount),
        likes: numberFormatting(likes),
        dislikes: numberFormatting(dislikes),
        url: formats.url
    }
    return results
}

module.exports = {
    getYtMp4,
    getYtMp3
}