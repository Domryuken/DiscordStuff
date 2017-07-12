const LeagueofLegends = require('leagueoflegends-api');
const commando = require("discord.js-commando")

class  Lol extends commando.Command {

    constructor(client){
        super(client, {
            name: "lol",
            group: "stuff",
            memberName: "lol",
            description: "league of legends",
            args: [{key: "name",prompt: "name",type: "string"}]
        });
    }

    run(message,args){
	
    }

}

module.exports = Lol;