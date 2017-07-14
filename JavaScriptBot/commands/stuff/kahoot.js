const stuff = require('../../JavaScriptBotStuff.js');
const commando = require("discord.js-commando");
var kahoot = require('kahoot.js');
var client = new kahoot;

class Kahoot extends commando.Command {

    constructor(client) {
        super(client, {
            name: "kahoot",
            group: "stuff",
            memberName: "kahoot",
            description: "kahoot!",
            args: [
                {
                    key: "code",
                    prompt: "kahoot code",
                    type: "string"
                }
            ]
        });
    }

    run(message,args) {
        message.reply(" ");
        message.channel.send("couldnt get this to work :(");
    }

}
module.exports = Kahoot;