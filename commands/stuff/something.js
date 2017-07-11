const commando = require("discord.js-commando")

class  Something extends commando.Command {

    constructor(client){
        super(client, {
            name: "some",
            group: "stuff",
            memberName: "some",
            description: "does something?"
        });
    }

    async run(message,args){
        message.reply("Doing something");
    }

}

module.exports = Something;