const Discord = require('discord.js');
const bot = new Discord.Client();
const stuff = require('./BotryukenStuff');


bot.login(stuff.key);

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.member.roles.has(message.guild.roles.find("name", stuff.reee).id) && (!message.author.bot)) {
    message.channel.send(changeText(message.author.username, message.content));
    message.delete();
  }
});

let changeText = function (name, message) {
  return `**${name} says**\n${message} \n\n**Alex says**\nREEEEEEEEEEEEEEE Dark souls is too hard for me and the community is toxic WAAAAAAAAAAAAAH`;
}

module.exports = {
  changeText
}