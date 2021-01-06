const Discord = require('discord.js');
const request = require('node-superfetch')
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "lovelevel",
    aliases: ["love", "lovetest"],
    description: "Shows you how much love the user you mentions has for you",
    cooldown: 5,
    perms: [],

    execute: async function (client, message, args) {

        const loveLevel = Math.floor(Math.random() * 99) + 1;

        const mention = message.mentions.users.first();

        let suEmbed = new MessageEmbed()
        .setTitle('Error!')
        .setDescription('Please mention a user to see how much they love you!')
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)

        if (!args[0]) {
           return message.reply(suEmbed)
        }

        const loveEmbed = new Discord.MessageEmbed()
        .setTitle('Love Test')
        .setDescription(`${mention}'s love level for ${message.author} is:\n${loveLevel}/100 💕`)
        .setColor(EMBED_COLOR)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
        message.channel.send(loveEmbed)
    }
}
