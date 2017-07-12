const commando = require("discord.js-commando");
const stuff = require('./JavaScriptBotStuff');
// const bot = new commando.Client();
const bot = new commando.Client({ id:'id', commandPrefix:'{'});

bot.registry.registerGroup("stuff", "Stuff")
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")


bot.login(stuff.discord);