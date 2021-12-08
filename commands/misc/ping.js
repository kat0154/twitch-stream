module.exports = {
    help: {
        name: 'ping',
        requestedBy: 'kat0154'
    },
    run: async (client, channel, tags, message) => {
        console.log(tags);
        return client.send(`@${tags.username}, PONG!`);
    }
};