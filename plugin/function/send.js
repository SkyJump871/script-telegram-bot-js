/**
 * sendText
 * @param {*} ctx 
 * @param {string} text 
 */
function sendText(ctx, text) {
    return ctx.reply(text)
}

module.exports = {
    sendText
}