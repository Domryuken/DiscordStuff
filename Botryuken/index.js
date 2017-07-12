const Discord = require('discord.js');
const bot = new Discord.Client();
const stuff = require('./BotryukenStuff');


bot.login(stuff.key);

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.member.roles.has(message.guild.roles.find("name", stuff.reee).id)&&(!message.author.bot)) {
    message.channel.send("**" + message.author.username + " says**\nREEEEEEEEEEEE " + message.content + " REEEEEEEEEEEEEE");
    message.delete();
  }
});