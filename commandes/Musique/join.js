const Discord = require("discord.js");

exports.run = async (client, message, args) => {

            if (!message.guild.voiceConnection) {
                
                if (!message.member.voiceChannel) return message.channel.send('you need to be connected to a voice channel !');

            }

            message.member.voiceChannel.join()            

            message.channel.send(`Successfully joinning **${message.member.voiceChannel.name}**`);
}

exports.help = {
    name : "join",
    description: "joinning your channel",
    usage: "join"
}
