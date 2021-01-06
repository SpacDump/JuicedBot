const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggestion",
    aliases: ["suggest", "suggestions", "sugg"],
    description: "Suggest a feature to be added to the bot!",
    cooldown: 180,
    perms: [],

    execute: async function(client, message, args) {
      let report = args.slice(0).join(" ");

      let channel = client.guilds.cache.get("773613281641496578").channels.cache.get("773647521817034822");

      let noChan = new MessageEmbed()
      .setTitle('Please specify a feature to suggest!')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)

      // const noChan = new MessageEmbed()
      // .setTitle('Please specify')
      try {
        if (!report){

        if (message.content.startsWith(`${PREFIX}suggestion` || `${PREFIX}suggest` || `${PREFIX}suggestions` || `${PREFIX}sugg`))
        message.delete({ timeout: 2000 });

          return message.channel.send(noChan)
      }
      } catch(err) {
        console.log(err);
      }

      if (report) {

        const embed = new MessageEmbed()
        .setDescription(report)
        .setTimestamp()
        .setColor(EMBED_COLOR)
        .setAuthor(`Suggestion by ${message.author.tag}`, message.author.displayAvatarURL())
        .setFooter('Jack\'s Bot :)')

        const sentEmbed = new MessageEmbed()
        .setTitle('Suggestion sent successfully')
        .setTimestamp()
        .setColor(EMBED_COLOR)
        .setFooter(`Suggestion by ${message.author.tag}`, message.author.displayAvatarURL())

        const msg = await channel.send(embed).then(message.channel.send(sentEmbed));
        }
      }
    }
