const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    aliases: ["cl", "change"],
    description: "Prints the changelog that you specify.",
    cooldown: 0,
    perms: ["ADMINISTRATOR"],

    execute: async function(client, message, args) {
        
        if (!args.length) {
            let noCL = new MessageEmbed()
            .setTitle('What did you change?')
            .setDescription('As far as I\'m aware, humans can\'t change the air.\n*Maybe you can...*')
            .setColor(EMBED_COLOR)
            .setTimestamp()
            .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

            message.delete({ timeout: 20 })
            message.channel.send(noCL)
        } else if (args[0].toLowerCase() == "network") {
            let networkCL = new MessageEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(EMBED_COLOR)
            
            message.delete({ timeout: 20 })
            message.channel.send('Network Ping role goes here hehe')
            message.channel.send(networkCL)
        } else if (args[0].toLowerCase() == "hub") {
            let hubCL = new MessageEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(EMBED_COLOR)

            message.delete({ timeout: 20})
            message.channel.send('Hub Ping role goes here hehe')
            message.channel.send(hubCL)
        } else if (args[0].toLowerCase() == "kitpvp" || args[0].toLowerCase() == "champion") {
            let kitCL = new MessageEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(EMBED_COLOR)

            message.delete({ timeout: 20 })
            message.channel.send('KitPvP Ping role here')
            message.channel.send(kitCL)
        } else {
            let notDef = new MessageEmbed()
            .setTitle('That ChangeLog Type wasn\'t found!')
            .setDescription('Please try again, and if you believe this is an issue, contact Jack.')
            .setColor(EMBED_COLOR)
            .setTimestamp()
            .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)

            message.delete({ timeout: 20 })
            message.channel.send(notDef)
        }
    }
}