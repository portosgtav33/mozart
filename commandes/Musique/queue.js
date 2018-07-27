const Discord = require("discord.js");

exports.run = async (client, message) => {

    if (!message.guild.voiceConnection) {
                
        if (!message.member.voiceChannel) return message.channel.send('you need to be connected to a voice channel');

        if (!message.client.voiceChannel) return message.channel.send('I\'m not connected, use `!join`');

    }

    if(!message.guild.voiceConnection.player.dispatcher || message.guild.voiceConnection.player.dispatcher.paused) return message.channel.send('i don\'t play music !');

    let queue = client.fonctions.enqueue(message.guild.id);
            
            if (queue.length == 0) return message.channel.send("the queue is empty");
            let text = '';
            for (let i = 0; i < queue.length; i++) {
                text += `${(i + 1)}. [${queue[i].title}](${queue[i].link}) | added by ${queue[i].requested} | typing in ${queue[i].channel}\n`
            };
    
            let embed = new Discord.RichEmbed()
            .setColor("0a5870")
            .setTitle('Queue')
            .setDescription(`**${text}**`)
            message.channel.send(embed);
}

exports.help = {
    name : "queue",
    usage: "queue",
    description: "whatch music queue"
}
