const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "uptime",
    aliases: ["onlinetime"],
    description: "Shows how long the bot has been online",
    usage: `\`${PREFIX}uptime\``,
    cooldown: 60,

    execute: async function(client, message, args) {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      let uEmbed = new MessageEmbed()
      .setTitle('Uptime')
      .setColor(EMBED_COLOR)
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`**${client.user.username}** has been online for **${days}d, ${hours}h, ${minutes}m and ${seconds}s**!`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)

      message.channel.send(uEmbed)
    }
}
