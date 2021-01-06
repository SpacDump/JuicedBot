const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("../config/config.json");
const { registerCommands, registerEvents } = require('./utils/registry.js');
const packageJson = require('../package.json')

const client = new discord.Client();

client.once("ready", () => {
    console.log(`░░░░░██╗░█████╗░░█████╗░██╗░░██╗░██████╗  ██████╗░░█████╗░████████╗\n░░░░░██║██╔══██╗██╔══██╗██║░██╔╝██╔════╝  ██╔══██╗██╔══██╗╚══██╔══╝\n░░░░░██║███████║██║░░╚═╝█████═╝░╚█████╗░  ██████╦╝██║░░██║░░░██║░░░\n██╗░░██║██╔══██║██║░░██╗██╔═██╗░░╚═══██╗  ██╔══██╗██║░░██║░░░██║░░░\n╚█████╔╝██║░░██║╚█████╔╝██║░╚██╗██████╔╝  ██████╦╝╚█████╔╝░░░██║░░░\n░╚════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═════╝░  ╚═════╝░░╚════╝░░░░╚═╝░░░\nv${packageJson.version}\n\nConnected to Discord!\n`);
    client.user.setActivity('!!help', { type: 'LISTENING' }) //PLAYING, STREAMING, LISTENING, WATCHING
        .then(presence => console.log(`Activity set to: Listening to ${presence.activities[0].name} by BOOTLOADER`))
        .catch(console.error);
});

client.on('guildMemberAdd', member => {
    member.roles.add(member.guild.roles.cache.find(i => i.id === '773650587321368597'))

    const welcomeEmbed = new MessageEmbed()

    let announcementsChannel = client.guilds.cache.get("773613281641496578").channels.cache.get("773817471416664084");
    let rulesChannel = client.guilds.cache.get("773613281641496578").channels.cache.get("773818065774444555");
    let rolesChannel = client.guilds.cache.get("773613281641496578").channels.cache.get("773818260964769792");
    let sinfoChannel = client.guilds.cache.get("773613281641496578").channels.cache.get("773818122800463882");

    welcomeEmbed.setColor('18c420')
    welcomeEmbed.setTitle(`Welcome to ${member.guild.name}!`)
    welcomeEmbed.setDescription(`Hey there ${member}, welcome to the server!\n\nBe sure to check out the ${rulesChannel} channel, stay up to date with all the latest ${announcementsChannel}, and claim your roles in the ${rolesChannel} channel!\n\nHave an awesome time here in ${member.guild.name}!\n\n*Want to know more about the server? Check out ${sinfoChannel}!*`)

    let greetingsChannel = client.guilds.cache.get("773613281641496578").channels.cache.get("773648506094485513");
    greetingsChannel.send(`${member}`)
    greetingsChannel.send(welcomeEmbed)
});

client.on('guildMemberRemove', member => {
    const goodbyeEmbed = new MessageEmbed()

    goodbyeEmbed.setColor('cc0808')
    goodbyeEmbed.setTitle(`Goodbye... :cry:`)
    goodbyeEmbed.setDescription(`Seems ${member.user} (${member.user.tag}) was too good for this server.\nWell, we were better off without them anyways...`)

    let greetingsChannel = client.guilds.cache.get("773613281641496578").channels.cache.get("773648506094485513");
    greetingsChannel.send(goodbyeEmbed)
});

(async () => {
    await client.login(config.TOKEN);
    client.commands = new discord.Collection();
    await registerEvents(client, '../eventHandlers');
    await registerCommands(client, '../commands');
})();
