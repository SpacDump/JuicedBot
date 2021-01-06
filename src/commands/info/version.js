const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");
const packageJson = require('../../../package.json');

module.exports = {
    name: "version",
    aliases: ["v", "ver", "botver"],
    description: "Shows the version that the bot is currently running",
    usage: `\`${PREFIX}version\``,
    cooldown: 60,

    execute: async function(client, message, args) {
      let vEmbed = new MessageEmbed()
      .setTitle('Version Panel')
      .setColor(EMBED_COLOR)
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`Version: ${packageJson.version}`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      message.channel.send(vEmbed);
    }
}
