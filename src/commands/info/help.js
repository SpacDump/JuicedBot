const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    aliases: ["h", "commands"],
    description: "Get help on commands.",
    usage: `To get help on a specific command, use \`${PREFIX}help [command name]\` (without the [ ]).\nFor a full list of all commands, simply use \`${PREFIX}help\`.`,
    examples: `\`${PREFIX}help ping\``,

    execute: async function(client, message, args) {
        if (!args.length) {
            let hEmbed = new MessageEmbed()
            .setTitle("**Command Categories**")
            .setColor(EMBED_COLOR)
            .setDescription(`Use \`${PREFIX}help [Command Name]\` to get more info on a specific command, for example: \`${PREFIX}help ping\``)
            .addFields(
          		{ name: 'Info', value: '`credits`, `help`, `ping`, `rules`, `serverinfo`, `uptime`, `userinfo`, `version`', inline: true },
          		{ name: 'Fun', value: '`8ball`, `affinity`, `avatar`, `gay`, `hungry`, `joke`, `kill`, `meme`, `say`', inline: true },
              { name: 'Moderation', value: '`bugreport`, `presence`, `purge`, `shutdown`, `suggestion`', inline: true},
          	)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
            .setThumbnail(client.user.displayAvatarURL())
            await message.channel.send(hEmbed);
        }
        else {
            const cmdname = args[0].toLowerCase();
            const command = client.commands.get(cmdname) || client.commands.find(c => c.aliases && c.aliases.includes(cmdname));

            if (!command) return message.channel.send(`${message.author.username}, that\'s not a valid command!`)

            let hEmbed = new MessageEmbed()
            .setTitle(`**${command.name}**`)
            .setDescription(`*${command.description}*`)
            .setColor(EMBED_COLOR)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
            if (command.usage) hEmbed.addField("**Usage:**", `${command.usage}`)
            if (command.aliases && command.aliases.length !== 0) hEmbed.addField("**Aliases:**", `${command.aliases.join(', ')}`)
            if (command.examples) hEmbed.addField("**Examples:**", `${command.examples}`)
            message.channel.send(hEmbed);
        }
    }
}
