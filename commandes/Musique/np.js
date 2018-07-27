const Discord = require("discord.js");
const ytdl = require("ytdl-core");
exports.run = async (client, message) => {

    if (!message.guild.voiceConnection) {
                
        if (!message.member.voiceChannel) return message.channel.send('you need to be connected to a voice channel');

        if (!message.client.voiceChannel) return message.channel.send('I\'m not connected, use `!join`');

    }

    if(!message.guild.voiceConnection.player.dispatcher || message.guild.voiceConnection.player.dispatcher.paused) return message.channel.send('i don\'t play music !');

    let queue = client.fonctions.enqueue(message.guild.id);
            
            if (queue.length == 0) return message.channel.send("no music in queue !");
                
                    ytdl.getInfo(queue[0].link, (err, info) =>{

            let embed = new Discord.RichEmbed()
        .setThumbnail(queue[0].thumbnails) 
        .setColor(0x0a5870)
        .setTitle('Now Playing')
        .setURL(queue[0].link)
        .addField('Title', `**${queue[0].title}**`, true)
        .addField("Author", queue[0].channelTitle, false)
        .addField("Timer", `${Math.floor(message.guild.voiceConnection.player.dispatcher.time / 60000)}:${Math.floor((message.guild.voiceConnection.player.dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((message.guild.voiceConnection.player.dispatcher.time % 60000)/1000) : Math.floor((message.guild.voiceConnection.player.dispatcher.time % 60000)/1000)}/${client.fonctions.time(info.length_seconds)}`, true)
        .addField('Requested by', queue[0].requested, true)
    
            message.channel.send(embed);
    })               


    
}

exports.help = {
    name : "np",
    usage: "np",
    description: "np"
}
