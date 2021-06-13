const fs = require('fs')
module.exports = {
    name: 'menu',
    usage: "send /menu",
    aliases: ['help', 'fitur', 'listfitur'],
    description: "Send list Features or Menu bot",
    category: 'Guide',
    execute(ctx, message, args, bot) {
        let commandsList = fs.readdirSync('./plugin/commands/').filter(list => list.endsWith('.js'))
        let menulist = `|=====| *VenBot* *Menu* |=====|\n\n*Prefix*: */*\n*Total Features*: __${commandsList.length}__\n\n`;
        let no = 0;
        for (let file of commandsList) {
            const command = require(`./${file}`)
            no += 1
            let formatsTeks = `*Category*: ${command.category ? command.category : "Unknown"}\n*Number*: *${no.toString()}*\n*Commands*: /${command.name}\n*Name*: ${command.name}\n*Usage*: ${command.usage ? command.usage : "None"}\n*Aliases*: ${command.aliases ? command.aliases : "None"}\n*Description*: ${command.description ? command.description : "Nothing"}\n\n` 
            menulist += formatsTeks
        }
        ctx.replyWithMarkdown(menulist)
    }
}