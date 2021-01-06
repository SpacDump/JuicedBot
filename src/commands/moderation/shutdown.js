const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "shutdown",
    aliases: ["destroy"],
    description: "Shuts down the bot process and sends the bot offline",
    perms: ["ADMINISTRATOR"],

    execute: async function(client, message, args) {

      let sdEmbed = new MessageEmbed()
      .setTitle(`kthxbai`)
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`Bot shutdown by ${message.author.username}`, `${message.author.displayAvatarURL()}`)

      message.channel.send(sdEmbed).then(m => {
        client.destroy();
      });
    }
}
