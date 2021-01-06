const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["repeat", "repeatafterme"],
    description: "Says what you tell the bot to say!",
    cooldown: 5,
    perms: [],

    execute: async function(client, message, args) {

      message.delete({ timeout: 1 });

      let nomsgEmbed = new MessageEmbed()
      .setTitle('Nothing to say?')
      .setColor(EMBED_COLOR)

      if (!args.length)
          return message.channel.send(nomsgEmbed);

      if (args[0].toLowerCase() === "embed") {
        const sayEmbed = new MessageEmbed()
        .setDescription(args.slice(1).join(" "))
        .setColor(EMBED_COLOR);

        message.channel.send(sayEmbed);
        } else {
          message.channel.send(args.join(" "));
        }

    }
}
