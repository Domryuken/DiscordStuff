const commando = require("discord.js-commando")

var typeIndex = {
    normal: 0,
    fighting: 1,
    flying: 2,
    poison: 3,
    ground: 4,
    rock: 5,
    bug: 6,
    ghost: 7,
    steel: 8,
    fire: 9,
    water: 10,
    grass: 11,
    electric: 12,
    psychic: 13,
    ice: 14,
    dragon: 15,
    dark: 16,
    fairy: 17
}


var calculator = {
    normal: [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    fighting: [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5],
    flying: [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1],
    poison: [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    ground: [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1],
    rock: [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
    bug: [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5],
    ghost: [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1],
    steel: [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2],
    fire: [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1],
    water: [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1],
    grass: [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
    electric: [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1],
    psychic: [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1],
    ice: [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1],
    dragon: [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
    dark: [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5],
    fairy: [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1]
}

class Vs extends commando.Command {


    constructor(client) {
        super(client, {
            name: "vs",
            group: "stuff",
            memberName: "vs",
            description: "Pokemon damage multiplier"
        });
    }

    run(message, args) {
        
        var attacker = args.toString().split(" ")[0];
		var type1 = args.toString().split(" ")[1];
		var type2 = args.toString().split(" ")[2];
        if(type1==type2)
            type2 = " ";
		var firstCalc = calculator[attacker][typeIndex[type1]];
		var secondCalc = calculator[attacker][typeIndex[type2]];
		
        var string = "";
		if(isNaN(secondCalc))
			string = attacker.toUpperCase() + " vs " + type1.toUpperCase() + " has an attack modifier of " + firstCalc ;
		else if(isNaN(firstCalc))
			string = attacker.toUpperCase() + " vs " + type2.toUpperCase() + " has an attack modifier of " + secondCalc;
		else
			string = attacker.toUpperCase() + " vs " + type1.toUpperCase() + "/" + type2.toUpperCase() + " has an attack modifier of " + firstCalc * secondCalc;
        message.reply("\n"+string);
        message.delete();
    }

}

module.exports = Vs;