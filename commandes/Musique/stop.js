const Discord = require("discord.js");

exports.run = async (client, message) => {

            if (!message.guild.voiceConnection) {
                
                if (!message.member.voiceChannel) return message.channel.send('you need to be connected to a voice channel');

                if (!message.client.voiceChannel) return message.channel.send('I\'m not connected, use `!join`');

            }
     
            if(!message.guild.voiceConnection.player.dispatcher || message.guild.voiceConnection.player.dispatcher.paused) return message.channel.send('i don\'t play music !');

                message.guild.voiceConnection.player.dispatcher.end()
            
            let queue = client.fonctions.enqueue(message.guild.id);
                
                message.channel.send(`Successfully stoped`);

                if (queue.length == 0) return;

                for (var i = queue.length - 1; i >= 0; i--) {
                    queue.splice(i, 1);
                }
}

exports.help = {
    name : "stop",
    description: "stop the music in your queue",
    usage: "stop"
}
