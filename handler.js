const Telebot = require('telebot')
const Collection = require('./lib/Collection')
const fs = require('fs')
const config = require('./config.json')
const { color } = require('./function')
const { isGroup } = require('./function/validator')
const bot = new Telebot({
    token: config.token
})

// Handling Commands Files
let commands = new Collection();
let commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (let file of commandsFiles) {
    const command = require(`./commands/${file}`)
    let name = command.name
    commands.set(name, command)
}

// Variable Settings
const prefix = config.prefix

bot.on('*', (message) => {
    const body = message.text
    const commandName = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(prefix.length)
    const isCmd = body.startsWith(prefix)
    const cmds = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (!isCmd) return
    if (!cmds) return
    if (message.from.is_bot) return

    // Log
    if (isGroup(message)) {
        console.log(color('Running Commands:', 'yellow'), color(`${commandName}`),  `[${args.length}]`, 'from', color(message.from.username, 'cyan'), 'in', color(message.chat.title, 'cyan'))
    }
    if (!isGroup(message)) {
        console.log(color('Running Commands:', 'yellow'), color(`${commandName}`),  `[${args.length}]`, 'from', color(message.from.username, 'cyan'))
    }

    try {
        cmds.execute(bot, message, args)
    } catch (error) {
        console.log("Error:", error)
    }
})

bot.start()