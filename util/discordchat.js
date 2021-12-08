const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient({id: 'webhook-id', token: 'webhook-token'});

module.exports = {
    run: async (client, channel, tags, message) => {
        webhookClient.edit({
            name: tags.username,
            avatar: 'https://cdn.discordapp.com/emojis/700771902074912849.png?size=128'
        }).then(w => {
            w.send(message);
        })
    }
}
