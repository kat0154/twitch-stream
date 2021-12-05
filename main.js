const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'kat0154BOT',
		password: 'oauth:wamyy4ethphy5f5l027p908dvofqms'
	},
	channels: [ 'kat0154' ]
});
client.connect().catch(console.error);

//command handler
const bot = require('./util/commandHandler.js');
bot.loadCommands();

client.on('message', (channel, tags, message, self) => {
	if(self)return;
	let prefix = '..';
	const args = message.toLowerCase().slice(prefix.length).trim().split(/ +/g);
	//console.log(bot.commands.find(c => c.help.name == args))
	let cmd = bot.commands.find(c => c.help.name == args);
	console.log(cmd)
	cmd.run(client, channel, tags, message);
});