const mongoose = require('mongoose');
const usersettings = require("../../schemas/usersettings.js");
module.exports = {
    help: {
        name: 'level',
        requestedBy: 'kat0154'
    },
    run: async (client, channel, tags, message) => {
        usersettings.findOne({username: tags.username}, (err, res) => {
			if(!res){
				const newDoc = new usersettings({username: tags.username})
				newDoc.save().catch(err => console.log(err));
			}
        });
        usersettings.findOne({username: tags.username }, (error, result) => {
            if (error) {
				console.error(error);
				client.send('@'+tags.username+', i\'m sorry but it appears an error has occurred!');
			}
            console.log(result)
			let curxp = result.xp;
			let curlvl = result.level;
			
			//client.send(`@${tags.username} you are currently level ${curlvl} with a total of ${curxp}XP, and ranked ${pos}/${result.length}`);
            client.send(`@${tags.username} you are currently level ${curlvl} with a total of ${curxp}XP`);
		})
    }
};