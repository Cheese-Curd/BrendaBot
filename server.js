const Discord = require('discord.js');
const {
	Client,
	Attachment
} = require('discord.js');
const bot = new Discord.Client();
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

//const users = Guild.members.cache.map(member => member.id); // Getting the members and mapping them by ID.

bot.on('ready', () => {
	console.log(`BOT STARTED | UPDATED`)
    bot.channels.fetch(`902726930829299762`).then(ch => ch.send(`I got updated cuties`));
	//bot.channels.fetch(`778657903052849172`).then(ch => ch.send(`Heya! I have fully booted and ready to go!`));
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list. \\
		bot.user.setActivity(activities_list[index], {
			type: 'WATCHING'
		})
        console.log("change shet")// sets bot's activities to one of the phrases in the arraylist. \\
	}, 10000); // Runs this every 10 seconds. \\
});

// compliment Sending \\

bot.on('message', async msg => {
    if (msg.content == `b.complimentme`) {
		var channel = msg.channel.id;
		const mbrs = msg.author
        var chosencompliment = compliments[Math.floor(Math.random() * (compliments.length - 1)) + 1]
        bot.channels.fetch(channel).then(ch => ch.send(`${msg.author}, ${chosencompliment}`));
		console.log(`complimented ${msg.author.username} with the compliment ${chosencompliment}`);
    // } else if (msg.content == `g.startcompliments`) {
    //     const channel = msg.channel.id;
	// 	//console.log(channel)
	// 	//console.log(members)
	// 	bot.channels.fetch(channel).then(ch => ch.send(`ayo I'm here`));
	// 	//you don't know how fucking LONG it took for me to find that (FUCKING THANG YOU OP: https://stackoverflow.com/questions/52138159/get-random-discord-user)
    //     let randomPer = msg.guild.members.cache.random().user;
	// 	var chosencompliment = compliments[Math.floor(Math.random() * (compliments.length - 1)) + 1]
	// 	console.log(`complimented ${randomPer.username} with the compliment ${chosencompliment}`);
	// 	bot.channels.fetch(channel).then(ch => ch.send(`${randomPer}, ${chosencompliment}`));
	// 	console.log("Started compliments in the channel " + channel)
	// 	t = 5
	// 	while (t != 1) {
	// 		compliment(channel)
	// 	}
	// 	if (t == 1) {
	// 		bot.channels.fetch(channel).then(ch => ch.send(`Uh oh! looks like your free trial of \`[compliment_STARTS]\` has expired! Please redo it :D`));
	// 	}
    }
});

// funny balls \\
bot.on('message', msg => {
	if (msg.author == '841301874749603840') { // fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you fuck you
		
	}
});

bot.on('message', msg => {
	var a = Math.floor(Math.random() * 100)
	if (msg.channel.name == 'vent') {
		// pants
	} else if (msg.author == '841301874749603840') {
		if (msg.content.includes(george.length)) {
			var insult = compliments[Math.floor(Math.random() * (insults.length - 1)) + 1]
			msg.channel.send(`<@841301874749603840>, ${insult}`);
		}
	} else {
				if (a == 30) {
			var chosencompliment = compliments[Math.floor(Math.random() * (compliments.length - 1)) + 1]
			msg.channel.send(`${msg.author}, ${chosencompliment}`);
			console.log(`complimented ${msg.author.username} with the compliment ${chosencompliment}`);
		} else if (a == 100) {
			var chosencompliment = compliments[Math.floor(Math.random() * (compliments.length - 1)) + 1]
			msg.channel.send(`${msg.author}, ${chosencompliment}`);
			console.log(`complimented ${msg.author.username} with the compliment ${chosencompliment}`);
		} else {
			console.log(a)
		}
	}
});

function compliment(id) {
	t += 1
	var chosencompliment = compliments[Math.floor(Math.random() * (compliments.length - 1)) + 1]
	console.log(`complimented ${randomPer.username} with the compliment ${chosencompliment}`);
	bot.channels.fetch(channel).then(ch => ch.send(`${randomPer}, ${chosencompliment}`));
}

// End \\

bot.login("")