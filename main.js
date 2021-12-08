let twitchClient = require('./client.js');
//read client file
let client = new twitchClient();
client.init();
//initilize bot

client.bot.on('message', (channel, tags, message, self) => {
	if(self)return; 
	//if the bot sends a message don't respond
	let prefix = '..'; //prefix for the bot (use before commands *..ping*)
	if(!message.toLowerCase().startsWith(prefix))return;
	//if not intended for the bot don't respond
	const args = message.toLowerCase().slice(prefix.length).trim().split(/ +/g)[0];
	try{
		let cmd = client.commands.find(c => c.help.name == args);
			//filter message for command
		if(cmd){//filter to see if command exists
			cmd.run(client, channel, tags, message);
				//run command
			}
	}catch{
		return;
	}
});