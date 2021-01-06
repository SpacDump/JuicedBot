const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "joke",
    aliases: ["givemejoke", "joketime"],
    description: "Tells you a joke",
    cooldown: 5,
    perms: [],

    execute: async function(client, message, args) {

      var jokes = require('../../../src/commands/fun/jokesarray.json')
      let rndJoke = jokes[Math.floor(Math.random() * jokes.length)]

      let jokeEmbed = new MessageEmbed()
      .setDescription(rndJoke)
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      message.delete({
          timeout: 10
      })
      message.channel.send(jokeEmbed)
    }
}
