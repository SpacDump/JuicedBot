const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kill",
    aliases: [],
    description: "Kills the specified user",
    cooldown: 5,

    execute: async function(client, message, args) {

      const mention = message.mentions.users.first();

      var weapons = require('../../../src/commands/fun/killarray.json')
      let rndWeapon = weapons[Math.floor(Math.random() * weapons.length)]

      let noMentionEmbed = new MessageEmbed()
      .setTitle('Uhhh...')
      .setDescription('You sure you wanna kill the air?\nI don\'t think you\'ll be able to breath after that...')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`The idiot was ${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      let selfEmbed = new MessageEmbed()
      .setTitle('Well then.')
      .setDescription('Suicide it is, huh?')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      let killEmbed = new MessageEmbed()
      .setDescription(`${message.author} ${rndWeapon} ${mention}`)
      .setColor(EMBED_COLOR)

      let killBotEmbed = new MessageEmbed()
      .setTitle('B... But...')
      .setDescription('Why kill me?\nWhat did I ever do to you?')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      if (!mention) {
        message.delete({ timeout: 2 })
        message.channel.send(noMentionEmbed)
      } else if (mention == message.author) {
        message.delete({ timeout: 2 })
        message.channel.send(selfEmbed)
      } else if (mention == client.user) {
        message.delete({ timeout: 2 })
        message.channel.send(killBotEmbed)
      } else {
        message.delete({ timeout: 2 })
        message.channel.send(killEmbed)
      }
    }
}
