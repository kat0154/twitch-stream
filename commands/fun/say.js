module.exports = {
    help: {
        name: 'say',
        requestedBy: 'kat0154'
    },
    run: async (client, channel, tags, message) => {
       let msg = message.split(' ').slice(1).join(' ');
        client.send(msg)
    }
}