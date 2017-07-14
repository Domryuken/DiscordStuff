const commando = require("discord.js-commando");
const bot = new commando.Client({ id:'id', commandPrefix:'}{'});

bot.registry.registerGroup("stuff", "Stuff")
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

const stuff = require("./KahootBotStuff");

bot.login(stuff.key);
