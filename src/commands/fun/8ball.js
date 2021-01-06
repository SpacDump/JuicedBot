const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "8ball",
    aliases: ["eightball"],
    description: "Lets you ask a question, and then gives you a response",
    cooldown: 5,
    perms: [],

    execute: async function(client, message, args) {

      var responses = require('../../../src/commands/fun/8ballarray.json')
      let rndResponse = responses[Math.floor(Math.random() * responses.length)]

      let responseEmbed = new MessageEmbed()
      .setTitle('The Eight Ball Speaks! :8ball:')
      .setDescription(rndResponse)
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      message.delete({
          timeout: 10
      })
      message.channel.send(responseEmbed)
    }
}
