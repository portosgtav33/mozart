const Discord = require("discord.js");
var moment = require("moment");
exports.run = (client, message) => {

    moment.locale("en");
    var mentionned = message.mentions.users.first();
    var getvalueof;
    
    if (mentionned) {
        var getvalueof = mentionned;
    } else {
        var getvalueof = message.author;
    }
    const member = message.guild.member(getvalueof);
    if (getvalueof.bot == true) {
        var checkbot = "🤖 Robot";
    } else {
        var checkbot = "🙎‍ Human";
        if (getvalueof.presence.status == 'online') {
            var etat = "<:online:441675527414349825> Online";
        } else if (getvalueof.presence.status == "offline") {
            var etat = "<:invisible:441675527166754817> Offline";
        } else if (getvalueof.presence.status == "idle") {
            var etat = "<:idle:441675527590248448> Idle";
        } else if (getvalueof.presence.status == "dnd") {
            var etat = "<:dnd:441675527460487188> Dnd";
        }
        if (getvalueof.presence.game === null) {
            var gamepresence = "None"
        } else {
            var gamepresence = getvalueof.presence.game.name
        }
        if (getvalueof.lastMessage === null) {
            var Derniermessage = "None";
        } else {
            var Derniermessage = `\`${getvalueof.lastMessage}\``;
        }

        if (message.member.voiceChannel === undefined) {
            var voicename = "No";
        } else {
            var voicename = `Yes (${message.member.voiceChannel})`;
        }


        

        

        var embed = new Discord.RichEmbed()
            .setThumbnail(getvalueof.avatarURL)
            .setColor(0x0a5870)
            .addField('Username', `**${getvalueof.username}**`, true)
            .addField('Discriminator', `**#${getvalueof.discriminator}**`, true)
            .addField('Nickname', `**${member.nickname !== null ? `${member.nickname}` : 'None'}**`, true)
            .addField('ID', `**${getvalueof.id}**`, true)
            .addField('Statut', `**${etat}**`, true)
            .addField('On discord until', "**" + moment(getvalueof.createdAt).format("LL") + "**", true)
            .addField('On server until', "**" + moment(message.guild.members.get(getvalueof.id).joinedAt).format("LL") + "**", true)
            .addField('Game', `**${gamepresence}**`, true)
            .addField('Last message 24h', `**${Derniermessage}**`, true)
            .addField('Type', `**${checkbot}**`, true)
            .addField('Roles', `${member.roles.map(roles => `${roles}`).join(', ')}`)
            .addField('In Voice guild', `**${voicename}**`, true)
        message.channel.send(embed); 
    }
    
};



exports.help = {
    name: 'profile',
    description: 'Show some informations about a member',
    usage: 'profile'
};
