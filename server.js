const Eris = require("eris");
const fs = require("fs")
const config = require("./config.json");
	const compliments = config.compliments;
	const insults = config.insults;
	const george = config.georgeinsults
let activities_list = [
	"you  (probably)",
	"Kel",	
	"George being a dick"
]
let t = 5
const token = fs.readFileSync('token.txt').toString().trim();
const { log } = require("./util.js");

// lol, thanks @type. I have suggestions now
/**
 * @type {Eris.Client}
 */
const bot = new Eris(token, {
    intents: [
        "all" // yippee
    ]
});

bot.on('ready', () => {
	log(1, "Bot started.")
    bot.createMessage('902726930829299762', `I got updated cuties`);
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list. \\
		bot.editStatus("online", [ { name: activities_list[index], type: 3 } ])
		log(4, "Changing status...")
	}, 10000); // Runs this every 10 seconds. \\
});

// compliment Sending \\

bot.on('messageCreate', async msg =>
{
    if (msg.content == `b.complimentme`)
		bot.createMessage(msg.channel.id, `${msg.author.mention}, ${compliment()}`);
});

bot.on('messageCreate', msg => {
	var rand = Math.floor(Math.random() * 100)
	if (!msg.channel.name == 'vent' && msg.author.id == "841301874749603840")
	{
		if (msg.content.includes(george.length))
		{
			var insult = insults[Math.floor(Math.random() * (insults.length - 1)) + 1]
			bot.createMessage(msg.channel.id, `<@841301874749603840>, ${insult}`);
		}
	}
	else
	{
		if (rand < 60 && msg.author.id != 901424052869144596)
		{
			bot.createMessage(msg.channel.id, `${msg.author.mention}, ${compliment()}`);
			log(4, `Random Compliment (${rand})`);
		}
	}
});

function compliment()
{
	t += 1
	var chosencompliment = compliments[Math.floor(Math.random() * (compliments.length - 1)) + 1]
	log(4, `Used compliment: ${chosencompliment}`);
	return chosencompliment
}

// End \\

bot.connect();
