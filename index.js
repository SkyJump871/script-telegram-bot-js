const {
    Telegraf
} = require('telegraf');
const config = require('./config.json')
const bot = new Telegraf(config.token)