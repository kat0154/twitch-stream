const yourmama = require('yourmama');

module.exports = {
    help: {
        name: 'yomama',
        requestedby: 'al1235'
    },
    run: async (client, channel, tags, message) => {
        const randomJoke = await yourmama.getRandom().then(roast=>{return roast});

        client.send(`@${tags.username}, ${randomJoke}`);
    }
}