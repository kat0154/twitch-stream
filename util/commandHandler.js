const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = {
    commands: new Array,
    loadCommands: async function() {
        const mainFiles = await readdir('./commands/misc');

        mainFiles.forEach(f => {
            if(!f.endsWith(".js"))return;
            let cmd = require(`../commands/misc/${f}`);
            this.commands.push(cmd);
	    });
    }
}