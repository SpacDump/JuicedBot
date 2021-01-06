//if(!message.member.roles.cache.find(r => r.name === "Admin")) return message.channel.send('You dont have permissions to do that you clown')
//
//let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
//if(!person) return message.reply("User Doesn't Exist");
//
//let muterole = message.guild.roles.cache.find(role => role.name == "muted");
//
//if(!muterole) return message.reply("Role Doesn't Exist");
//
//let time = args[2];

//if(!time){
//    return message.reply("How Long?");
//}

////Cache their already existing roles
//cachedUserRoles[person.id] = person.roles.cache;
////Set their roles to an empty array to clear them, then add the muted role once all roles were removed successfully
//person.roles.set([]).then(member => member.roles.add(muterole)).catch(console.error);
//
//message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);
//
//setTimeout(function(){
//    //Grab their existing roles and set them back to the user, we wont need to remove the muted role since setting the roles would override all existing ones already
//    person.roles.set(cachedUserRoles[person.id]).catch(console.error)
//    message.channel.send(`@${person.user.tag} has now been unmuted`)
//}, ms(time));
