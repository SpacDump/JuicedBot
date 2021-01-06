const Discord = require('discord.js');
const request = require('node-superfetch')
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gayr8",
    aliases: ["gay", "howgay"],
    description: "Shows you your gay percentage",
    cooldown: 5,
    perms: [],

    execute: async function (client, message, args) {

        const gayLevel = Math.floor(Math.random() * 99) + 1;

        const gayEmbed = new Discord.MessageEmbed()
        .setTitle('gay r8 machine')
        .setDescription(`${message.author}, you are ${gayLevel}% gay. :rainbow_flag:`)
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
        message.channel.send(gayEmbed)
    }
}
