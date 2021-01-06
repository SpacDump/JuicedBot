const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "credits",
    aliases: ["creds", "credit"],
    description: "Shows the credits panel.",
    cooldown: 30,

    execute: async function(client, message, args) {

      message.delete({ timeout: 1 })

      let creditsEmbed = new MessageEmbed()
      .setTitle('Credits')
      .setDescription('Below is a list of all developers and contributors that have helped develop the **Jack\'s Bot** project.\n\n💻 **Developers** 💻\n» **Jack** (Jackk#3018) [Lead Developer]\n\n🌸 Contributors 🌸\n» **RadioReapr** (RadioReapr#5298) [Command Designer & Beta Tester]')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      message.channel.send(creditsEmbed)
    }
}
