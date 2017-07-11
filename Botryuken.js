const commando = require("discord.js-commando");
const stuff = require('./BotryukenStuff');
const bot = new commando.Client();

bot.registry.registerGroup("stuff", "Stuff")
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")


bot.login(stuff.key);