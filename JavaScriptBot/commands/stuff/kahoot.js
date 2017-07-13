const commando = require("discord.js-commando");
var kahoot = require('kahoot.js');

class Kahoot extends commando.Command {

    constructor(client) {
        super(client, {
            name: "kahoot",
            group: "stuff",
            memberName: "kahoot",
            description: "kahoot!"
        });
    }

    run(message, args) {
        var client = new kahoot;
        
    }

}

module.exports = Kahoot;