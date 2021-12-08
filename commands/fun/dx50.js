module.exports = {
    help: {
        name: 'dx50',
        requestedBy: 'kat0154'
    },
    run: async (client, channel, tags, message) => {
        client.send(`@${tags.username}, the die landed a combined number of ${Math.floor(Math.random() * 500 ) + 1}`)
    }
}