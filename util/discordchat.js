//https://discord.com/api/webhooks/917962175656636457/'aAsYjjN3Oa1QZ84Hvs4Keuk-9xagj41krH0jrTlJUab-2UPg-pIg1bcu-jrYGm8hhgaD'
const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient({id: '917962175656636457', token: 'aAsYjjN3Oa1QZ84Hvs4Keuk-9xagj41krH0jrTlJUab-2UPg-pIg1bcu-jrYGm8hhgaD'});

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