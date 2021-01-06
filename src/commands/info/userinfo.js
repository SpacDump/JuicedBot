const Discord = require('discord.js');
const got = require("got");
const moment = require("moment");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "userinfo",
    aliases: ["user", "uinfo", "profile"],
    description: "Shows the mentioned user(s) information. Defaults to self if no-one is mentioned",
    usage: `\`${PREFIX}userinfo (@mention)\``,
    cooldown: 30,

    execute: async function(client, message, args) {
      let singleEmbed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setColor(EMBED_COLOR)
          .addFields(
              { name: 'Joined', value: moment.utc(message.author.joinedAt).format('DD/MM/YY'), inline: true },
              { name: 'Registered', value: moment.utc(message.author.createdAt).format('DD/MM/YY'), inline: true },
              { name: 'Roles', value: message.member.roles.cache.filter(r => r.id !== message.guild.roles.everyone.id).map(r => r).join(', '), inline: false },
              { name: 'User ID', value: message.author.id, inline: false },
              { name: 'Status', value: message.author.presence.status, inline: true},
          )
          .setTimestamp()
          .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

      if (!message.mentions.users.size) {
        return message.channel.send(singleEmbed);
      }

      const avatarList = message.mentions.users.map(user => {

        let multipleEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor(EMBED_COLOR)
            .addFields(
                { name: 'Joined', value: moment.utc(message.author.joinedAt).format('DD/MM/YY'), inline: true },
                { name: 'Registered', value: moment.utc(message.author.createdAt).format('DD/MM/YY'), inline: true },
                { name: 'Roles', value: message.member.roles.cache.filter(r => r.id !== message.guild.roles.everyone.id).map(r => r).join(', '), inline: true },
                { name: 'User ID', value: message.author.id, inline: true },
                { name: 'Status', value: `${user.presence.status}`, inline: true},
            )
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

        return multipleEmbed;
      });

      message.channel.send(avatarList);
    }
}
