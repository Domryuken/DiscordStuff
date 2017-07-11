const commando = require("discord.js-commando");
const key = require('./BotryukenToken').key;
const bot = new commando.Client();

bot.registry.registerGroup("stuff", "Stuff")
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")


bot.login(key);