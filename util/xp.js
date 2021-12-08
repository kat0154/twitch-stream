const talkedRecently = new Set();
let discord = require('./discordchat.js');
const usersettings = require("../schemas/usersettings.js");

module.exports = {
    run: async (client) => {
        client.bot.on('message', (channel, tags, message, self) => {
            //discord.run(client, channel, tags, message);

            if(self)return; //if the bot sends a message don't respond

            if(tags.username == "nightbot")return;
            if(tags.username == "streamelements")return;
            if(tags.username == "wizebot")return;
            if(tags.username == "soundalerts")return;
            //dont allow bots

            //start of the levelSystem
            usersettings.findOne({username: tags.username}, (err, res) => {
                if(err) console.log(err);
                if(!res){
                    const newDoc = new usersettings({username: tags.username})
                    newDoc.save().catch(err => console.log(err));
                }else{
                    if(talkedRecently.has(tags.username))return;
                        //^ if the user has talked recently
                    let xpAdd = Math.floor(Math.random() * 7) + 8;
                    //^the amount of xp a user will get per-message will vary
                    let nxtLvl = `${res.level}` * 300;
                    //^the amount of xp needed to level up
                    res.xp = res.xp + xpAdd;
                    res.totalxp = res.totalxp + xpAdd;
                    res.save();
                    talkedRecently.add(tags.username);
                    setTimeout(() => {
                        talkedRecently.delete(tags.username);
                    }, 60000);
                    //earn xp once per minute
                    if(nxtLvl <= `${res.xp}`){//this is run when someone levels up
                        let nextLevel = res.level++;
                        usersettings.updateOne({username: tags.username}, {xp: 0, level: nextLevel}, function(e,r){
                            client.send(`gg @${tags.username}, you've leveled up!`)
                                //^sends the level up message
                        });
                    }
                }
            });
            //end of the levelSystem

        })
    }
}