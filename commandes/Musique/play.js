const Discord = require("discord.js");

exports.run = async (client, message) => {

            if (!message.guild.voiceConnection) {
                
                if (!message.member.voiceChannel) return message.channel.send('you need to be connected to a voice channel');

                if (!message.client.voiceChannel) return message.channel.send('I\'m not connected, use `!join`');

            }
     
            let args = message.content.split(" ").slice(1).join(" ")
            
            if (!args) return message.channel.send('what do you want to listen ?');
            
            client.fonctions.play(message, client.fonctions.enqueue(message.guild.id), args)
}

exports.help = {
    name : "play",
    description: "joinning your channel",
    usage: "play [link / search]"
}
