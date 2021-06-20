const fs = require('fs');
const package = require('../package.json')
module.exports = {
    name: 'menu',
    usage: "send /menu",
    aliases: ['help', 'guide'],
    description: "Memberi list menu yang ada dibot",
    category: 'Bot',
    execute(bot, message, args) {
        let commandsList = fs.readdirSync('./commands/').filter(list => list.endsWith('.js'))
        let menulist = `*Nama Bot*: RF\n*Version*: ${package.version}\n*Prefix*: */*\n*Total Fitur*: __${commandsList.length}__\n\n`;
        let no = 0;
        for (let file of commandsList) {
            const command = require(`./${file}`)
            no += 1
            let formatsTeks = `*Kategori*: ${command.category ? command.category : "Tidak diketahui"}\n*Nomor*: *${no.toString()}*\n*Perintah*: /${command.name}\n*Nama*: ${command.name}\n*Penggunaan*: ${command.usage ? command.usage : "None"}\n*Kesamaan*: ${command.aliases ? command.aliases : "None"}\n*Deskripsi*: ${command.description ? command.description : "Tidak ada"}\n\n` 
            menulist += formatsTeks
        }
        bot.sendMessage(message.chat.id, menulist, {
            reply: message.message_id,
            parseMode: 'markdown'
        })
    }
}