const tmi = require('tmi.js');
const mongoose = require('mongoose');
const xpsystem = require('./util/xp.js');
const bot = require('./util/commandHandler.js');

module.exports = class twitchClient {
    constructor(){
        /* 
        * @returns {client} this
        */
        this.bot = new tmi.Client({
            options: { debug: true },
            identity: {
                username: 'kat0154BOT',
                password: 'oauth:wamyy4ethphy5f5l027p908dvofqms'
            },
            channels: [ 'kat0154' ]
        });
        /* 
        * @returns {Array} command array
        * @example [{help: {name: 'ping'}, run: async fn()...}]
        */
        this.commands = bot.commands;
        /* 
        * @returns {Void} initilize the bot and load commands
        */
        this.init = function(){
            bot.loadCommands();
            this.bot.connect().catch(console.error);
            mongoose.connect('mongodb+srv://kat:P'+encodeURIComponent('@')+'ssword@twitchclient.yk76k.mongodb.net/bot', { useNewUrlParser: true, useUnifiedTopology: true })
            .catch((dbErr)=>{
                console.log("DB Connection Error: ", dbErr.message);
            });
            xpsystem.run(this);
        }
        /* 
        * @returns {String} send a message to twitch chat
        */
        this.send = function(message){
            this.bot.say('#kat0154', message);
        }
    }
}