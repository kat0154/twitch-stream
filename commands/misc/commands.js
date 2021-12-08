module.exports = {
    help: {
        name: 'commands',
        requestedBy: 'kat0154'
    },
    run: async (client, channel, tags, message) => {
        let cmds = client.commands;
        //[]
        client.send(cmds.map(c => c.help.name).join(', '));
    }
}