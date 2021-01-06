const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "oof",
    aliases: [],
    description: "Oof.",
    usage: `${PREFIX}oof`,
    cooldown: 5,

    execute: async function(client, message, args) {
      var oof = require('../../../src/commands/fun/oofarray.json')
      let rndOof = oof[Math.floor(Math.random() * oof.length)]

      let oofEmbed = new MessageEmbed()
      .setImage(rndOof)
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      message.delete({ timeout: 20 })
      message.channel.send(oofEmbed)
    }
}
