const {
    Telegraf
} = require('telegraf')
const Collection = require('./lib/Collection')
const fs = require('fs')
const config = require('./config.json')
const bot = new Telegraf(config.token)

// Handling Commands Files
let commands = new Collection();
let commandsFiles = fs.readdirSync('./plugin/commands/').filter(file => file.endsWith('.js'))
for (let file of commandsFiles) {
    const command = require(`./plugin/commands/${file}`)
    let name = command.name
    commands.set(name, command)
}

// Variable Settings
const prefix = config.prefix

bot.on('message', (ctx) => {
    const message = ctx.message
    const body = message.text ? message.text : message.text
    const args = body.trim().split(/ +/).slice(prefix.length)
    const commandsName = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
    const cmd = commands.get(commandsName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandsName))
    if (!cmd) return;
    if (message.from.is_bot) return
    try {
        console.log(`Running Commands: ${commandsName} for ${message.chat.username}`)
        cmd.execute(ctx, message, args, bot)
    } catch (error) {
        console.log("Error:", error)
    }
})

bot.launch();