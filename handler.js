const Telebot = require('telebot')
const Extra = require('@lendev0406/extramap')
const fs = require('fs')
const config = require('./config.json')
const { color, filter } = require('./function')
const { isGroup } = require('./function/validator')
const { getChatId, getFromId, getMessageId, getUsername, getTitleGroup } = require('./function/get')
const bot = new Telebot({
    token: config.token
})

// Handling Commands Files
let commands = new Extra();
let commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (let file of commandsFiles) {
    const command = require(`./commands/${file}`)
    let name = command.name
    commands.set(name, command)
}

// Variable Settings
const prefix = config.prefix

bot.on('*', async (message) => {
    const { text, caption } = message
    const body = text ? text : caption
    const commandName = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(prefix.length)
    const isCmd = body.startsWith(prefix)
    const cmds = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (!isCmd) return
    if (!cmds) return
    if (message.from.is_bot) return

    // Cooldowns
    if (isCmd && filter.isFiltered(getFromId(message)) && !isGroup(message)) {
        console.log(color('Spam Commands:', 'red'), color(`${commandName}`), `[${args.length}]`, 'from', color(getUsername(message), 'cyan'))
        return bot.sendMessage(getChatId(message), "Wait 5 seconds to request another commands", {
            reply: getMessageId(message),
            parseMode: 'markdown'
        })
    }
    if (isCmd && filter.isFiltered(getFromId(message)) && isGroup(message)) {
        console.log(color('Spam Commands:', 'red'), color(`${commandName}`), `[${args.length}]`, 'from', color(getUsername(message), 'cyan'), 'in', color(getTitleGroup(message), 'cyan'))
        return bot.sendMessage(getChatId(message), "Wait 5 seconds to request another commands", {
            reply: getMessageId(message),
            parseMode: 'markdown'
        })
    }

    // Log
    if (isGroup(message)) {
        console.log(color('Running Commands:', 'yellow'), color(`${commandName}`),  `[${args.length}]`, 'from', color(message.from.username, 'cyan'), 'in', color(message.chat.title, 'cyan'))
    }
    if (!isGroup(message)) {
        console.log(color('Running Commands:', 'yellow'), color(`${commandName}`),  `[${args.length}]`, 'from', color(message.from.username, 'cyan'))
    }

    // Add to Cooldowns
    if (isCmd) {
        filter.addFilter(getFromId(message))
    }

    // Execute Commands
    try {
        cmds.execute(bot, message, args)
    } catch (error) {
        console.log("Error:", error)
    }
})

bot.start()