const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "purge",
    aliases: ["clear", "clean"],
    description: "Deletes the specified amount of messages in the current channel.",
    examples: `${PREFIX}purge <amount>`,
    cooldown: 10,
    perms: ["MANAGE_MESSAGES"],

    execute: async function (client, message, args) {
      const amount = parseInt(args[0]) + 1;

      let nanEmbed = new MessageEmbed()
      .setTitle('Error!')
      .setDescription('Please enter a valid number between 1 - 99 to use this command!')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      let unexErrorEmbed = new MessageEmbed()
      .setTitle('Unexpected Error!')
      .setDescription('An unexpected error occurred while purging messages in this channel.')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      if (isNaN(amount)) {
        return message.reply(nanEmbed);
      } else if (amount <= 1 || amount > 100) {
        return message.reply(nanEmbed);
      }

      message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send(unexErrorEmbed);
      });

      let channel = client.guilds.cache.get("773613281641496578").channels.cache.get("773666740495188000");

      var logEmbed = new Discord.MessageEmbed()
      .setTitle('Purge')
      .addField('__Staff Member__', message.author, false)
      .addField('__Channel__', message.channel)
      .addField('__Messages Deleted__', amount, false)
      .setColor(EMBED_COLOR)
      .setTimestamp()

      channel.send(logEmbed);

      var doneEmbed = new MessageEmbed()
      .setTitle('Purge')
      .addField('__Staff Member__', message.author, false)
      .addField('__Messages Deleted__', amount, false)
      .setColor(EMBED_COLOR)
      .setTimestamp()

      message.channel.send(doneEmbed)

    }
}
