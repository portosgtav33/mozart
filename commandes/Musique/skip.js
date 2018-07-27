const Discord = require("discord.js");
exports.run = async (client, message) => {

    if (!message.guild.voiceConnection) {
                
        if (!message.member.voiceChannel) return message.channel.send('you need to be connected to a voice channel');

        if (!message.client.voiceChannel) return message.channel.send('I\'m not connected, use `!join`');

    }

    if(!message.guild.voiceConnection.player.dispatcher || message.guild.voiceConnection.player.dispatcher.paused) return message.channel.send('i don\'t play music !');

    message.guild.voiceConnection.player.dispatcher.end()   
    message.channel.send(':fast_forward: Successfully skipping !');


    
}

exports.help = {
    name : "skip",
    usage: "skip",
    description: "skip"
}
