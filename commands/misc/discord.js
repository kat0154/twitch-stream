const { client } = require("tmi.js")

module.exports = {
    help: {
        name: 'discord',
        requestedBy: 'kat0154'
    },
    run: async (client, channel, tags, message) => {
        client.send(`invite link for kat's lounge: https://discord.gg/fbkS8787vU`);
    }
}