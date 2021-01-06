const PREFIX = require('../../../config/config.json').PREFIX;

module.exports = {
    name: "ping",
    aliases: ["pong"],
    description: "Get the bots current ping.",
    usage: `\`${PREFIX}ping\``,
    cooldown: 30,

    execute: async function(client, message, args) {
        try {
            const msg = await message.channel.send(":ping_pong: **Pinging...**");
            await msg.edit(`:ping_pong: **Pong!**\nLatency is \`${msg.createdTimestamp - message.createdTimestamp}ms.\``);
        } catch (err) {
            message.channel.send(`${message.author.username}, oops, something went wrong! Contact support.\nError: \`${err.message}\``)
        }
    }
}
