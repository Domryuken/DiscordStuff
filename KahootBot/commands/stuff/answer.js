const commando = require("discord.js-commando")
const Discord = require("discord.js");
const kahoot = require("kahoot.js")
const bot = new kahoot;

class  Grid extends commando.Command {

    constructor(client){
        super(client, {
            name: "kahoot",
            group: "stuff",
            memberName: "kahoot",
            description: "Kahoot!"
        });
    }

    run(message,args){
		
    }

}

module.exports = Grid;