module.exports = {
    help: {
        name: 'ping'
    },
    run: async (client, channel, tags, message) => {
        client.say(channel, `@${tags.username}, PONG!`);
    }
};