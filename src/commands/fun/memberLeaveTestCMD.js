const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "test",
    aliases: ["testcommand", "testcmd"],
    description: "Test",
    cooldown: 0,

    execute: async function(client, message, args) {
        let testembed = new MessageEmbed()
        .setTitle('Test Embed')
        .setDescription('LOL this is a test embed adadadadad')
        .setColor(EMBED_COLOR)

        let channel = client.guilds.cache.get("773613281641496578").channels.cache.get("773648506094485513");

        message.delete({ timeout: 20 })
        channel.send(testembed).then(sentEmbed => {
            sentEmbed.react("🇫")
        })
    }
}