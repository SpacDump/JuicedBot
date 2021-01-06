const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bugreport",
    aliases: ["bugreports", "bug", "bugs", "br", "brs"],
    description: "Send a bug to Jack for fixing :)",
    cooldown: 180,
    perms: [],

    execute: async function(client, message, args) {
      let report = args.slice(0).join(" ");

      let channel = client.guilds.cache.get("773613281641496578").channels.cache.get("773647485822042144");

      let noChan = new MessageEmbed()
      .setTitle('Please specify a bug to report!')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)

      // const noChan = new MessageEmbed()
      // .setTitle('Please specify')
      try {
        if (!report){

        if (message.content.startsWith(`${PREFIX}bugreports` || `${PREFIX}bug` || `${PREFIX}bugs` || `${PREFIX}br`))
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
        .setAuthor(`Bug Report by ${message.author.tag}`, message.author.displayAvatarURL())
        .setFooter('Jack\'s Bot :)')

        const sentEmbed = new MessageEmbed()
        .setTitle('Report Successful')
        .setTimestamp()
        .setColor(EMBED_COLOR)
        .setFooter(`Bug Report by ${message.author.tag}`, message.author.displayAvatarURL())

        const msg = await channel.send(embed).then(message.channel.send(sentEmbed));
        }
      }
    }
