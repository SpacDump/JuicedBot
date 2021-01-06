const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["av"],
    description: "Shows the mentioned user(s) avatars. Defaults to self if no-one is mentioned",
    usage: `\`${PREFIX}avatar (@mention)\``,
    cooldown: 5,

    execute: async function(client, message, args) {
      let singleEmbed = new MessageEmbed()
      .setTitle('Your Avatar')
      .setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)

      if (!message.mentions.users.size) {
        return message.channel.send(singleEmbed);
      }

      const avatarList = message.mentions.users.map(user => {

        let multipleEmbed = new MessageEmbed()
        .setTitle(`${user.username}'s avatar`)
        .setImage(`${user.displayAvatarURL({ format: "png", dynamic: true})}`)
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)

        return multipleEmbed;
      });

      message.channel.send(avatarList);
    }
}
