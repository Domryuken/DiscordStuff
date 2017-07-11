const Discord = require('discord.js');
const client = new Discord.Client();
const stuff = require('./BotryukenStuff');
 
client.login(stuff.key);

client.on('ready', () => {
  console.log('I am ready!');
});
 
client.on('message', message => {
  if (message.member.roles.has(message.guild.roles.find("name",stuff.reee).id)) {
      message.channel.send("**"+message.author.username + " says**\nREEEEEEEEEEEE " + message.content + " REEEEEEEEEEEEEE");
      message.delete();
  }
});



