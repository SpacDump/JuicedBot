const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hungry",
    aliases: ["feedme", "food"],
    description: "Gives you free food!",
    cooldown: 5,
    perms: [],

    execute: async function(client, message, args) {

      var food = require('../../../src/commands/fun/hungryarray.json')
      let rndFood = food[Math.floor(Math.random() * food.length)]

      let foodEmbed = new MessageEmbed()
      .setTitle('Feeling Hungry?')
      .setDescription(rndFood)
      .setColor(EMBED_COLOR)

      message.delete({
          timeout: 10
      })
      message.channel.send(foodEmbed)
    }
}
