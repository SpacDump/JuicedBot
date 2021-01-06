const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "presence",
    aliases: ["pres"],
    description: "Changes the bot presence!",
    cooldown: 60,
    perms: ["ADMINISTRATOR"],

    execute: async function(client, message, args) {

      const number = args[0]

      let presEmbed = new MessageEmbed()
      .setTitle('Presence List')
      .setDescription('*Choose a presence from below and use the corresponding command to change the bot\'s presence!*')
      .addFields(
        { name: '1', value: `\`Listening to ${PREFIX}help\``, inline: true },
        { name: '2', value: '`Watching over # servers!`', inline: true },
        { name: '3', value: '`Playing with the ban button`', inline: true},
      )
      .addFields(
        { name: '4', value: '`Playing with the E-Daters`', inline: true},
        { name: '5', value: '`Playing uh-oh, spaghettio\'s!`', inline: true},
        { name: '6', value: '`Watching messages zoooom!`', inline: true},
      )
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
      .setColor(EMBED_COLOR)

      if (!args.length) {
        message.channel.send(presEmbed)
      } else if (number == "1") {
        let setEmbed1 = new MessageEmbed()
        .setTitle('Presence Updated!')
        .setDescription(`The bots status has now been updated to:\n\`Listening to ${PREFIX}help\`\n\n*Please wait a few moments for Discord to update the status!*`)
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`Presence updated by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)

        client.user.setActivity(`!!help`, { type: 'LISTENING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
            .then(presence => console.log(`\n\nActivity set to: Listening ${presence.activities[0].name} by ${message.author.username}#${message.author.discriminator}`))
            .catch(console.error);

        message.channel.send(setEmbed1)
      } else if (number == "2") {
        let setEmbed2 = new MessageEmbed()
        .setTitle('Presence Updated!')
        .setDescription('The bots status has now been updated to:\n`Watching over (n) servers!`\n\n*Please wait a few moments for Discord to update the status!*')
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`Presence updated by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)

        client.user.setActivity(`over ${client.guilds.cache.size} servers!`, { type: 'WATCHING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
            .then(presence => console.log(`\n\nActivity set to: Watching ${presence.activities[0].name} by ${message.author.username}#${message.author.discriminator}`))
            .catch(console.error);

        message.channel.send(setEmbed2)
      } else if (number == "3") {
        let setEmbed3 = new MessageEmbed()
        .setTitle('Presence Updated!')
        .setDescription('The bots status has now been updated to:\n`Playing with the ban button.`\n\n*Please wait a few moments for Discord to update the status!*')
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`Presence updated by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)

        client.user.setActivity(`with the ban button.`, { type: 'PLAYING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
            .then(presence => console.log(`\n\nActivity set to: Playing ${presence.activities[0].name} by ${message.author.username}#${message.author.discriminator}`))
            .catch(console.error);

        message.channel.send(setEmbed3)
      } else if (number == "4") {
        let setEmbed4 = new MessageEmbed()
        .setTitle('Presence Updated!')
        .setDescription('The bots status has now been updated to:\n`Playing with the E-Daters`\n\n*Please wait a few moments for Discord to update the status!*')
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`Presence updated by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)

        client.user.setActivity(`with the E-Daters`, { type: 'PLAYING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
            .then(presence => console.log(`\n\nActivity set to: Playing ${presence.activities[0].name} by ${message.author.username}#${message.author.discriminator}`))
            .catch(console.error);

        message.channel.send(setEmbed4)
      } else if (number == "5") {
        let setEmbed5 = new MessageEmbed()
        .setTitle('Presence Updated!')
        .setDescription('The bots status has now been updated to:\n`Playing uh-oh spaghettio\'s!`\n\n*Please wait a few moments for Discord to update the status!*')
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`Presence updated by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)

        client.user.setActivity(`uh-oh spaghettio's!`, { type: 'PLAYING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
            .then(presence => console.log(`\n\nActivity set to: Playing ${presence.activities[0].name} by ${message.author.username}#${message.author.discriminator}`))
            .catch(console.error);

        message.channel.send(setEmbed5)
      } else if (number == "6") {
        let setEmbed6 = new MessageEmbed()
        .setTitle('Presence Updated!')
        .setDescription('The bots status has now been updated to:\n`Watching messages zoooom!`\n\n*Please wait a few moments for Discord to update the status!*')
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`Presence updated by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)

        client.user.setActivity(`messages zoooom!`, { type: 'WATCHING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
            .then(presence => console.log(`\n\nActivity set to: Watching ${presence.activities[0].name} by ${message.author.username}#${message.author.discriminator}`))
            .catch(console.error);

        message.channel.send(setEmbed6)
      } else {
        let noNumber = new MessageEmbed()
        .setTitle('An error occurred!')
        .setDescription('You did not enter a presence number.\nPlease use `!pres` for a list of presences to change to.')
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
      }

    }
}
