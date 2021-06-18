const ytsr = require('ytsr')
const { getYtMp3 } = require('./downloader')
const parse = require('parse-duration')
const { hmsToSeconds } = require('./helper')

const searchYoutubeMusic = async (titles) => {
    const filters1 = await ytsr.getFilters(titles)
    const dataFilters = filters1.get('Type').get('Video')
    const dataResults = await ytsr(dataFilters.url)
    const randomNumber = Math.floor(Math.random() * dataResults.items.length)
    const durationFilters = dataResults.items[randomNumber].duration
    if (hmsToSeconds(durationFilters) >= parse('10m', format='s') || hmsToSeconds(durationFilters) <= parse('1m', format='s')) {
        return searchYoutubeMusic(title)
    }
    const { author, title, thumbnails, uploadDate, url, views, dislikes, likes, duration } = await getYtMp3(dataResults.items[randomNumber].url)
    const result = {
        author: author,
        title: title,
        uploadDate: uploadDate,
        thumbnail: thumbnails,
        duration: duration,
        views: views,
        likes: likes,
        dislikes: dislikes,
        url: url
    }
    return result
}

module.exports = {
    searchYoutubeMusic
}