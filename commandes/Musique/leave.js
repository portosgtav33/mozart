const Discord = require("discord.js");

exports.run = async (client, message) => {

    if (!message.guild.voiceConnection) {
                
        if (!message.member.voiceChannel) return message.channel.send('you need to be connected to a voice channel');

        if (!message.client.voiceChannel) return message.channel.send('I\'m not connected, use `!join`');

    }

    message.member.voiceChannel.leave();          
            
            let queue = client.fonctions.enqueue(message.guild.id);

            message.channel.send(`Successfully leaving **${message.member.voiceChannel.name}**`);

                if (queue.length == 0) return; 

                for (var i = queue.length - 1; i >= 0; i--) {
                    queue.splice(i, 1);
                }
}

exports.help = {
    name : "leave",
    usage: "leave",
    description: "leaving your channel"
}
