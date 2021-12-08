module.exports = {
    help: {
        name: 'coinflip',
        requestedby: 'vinsterprime'
    },
    run: async (client, channel, tags, message) => {
        let coin = Math.floor(Math.random() * 2);
        console.log(coin);
        client.send(`@${tags.username}, ${coin > 0 ? 'looks like it\'s heads': 'looks like it\'s tails'}`);
    }
}