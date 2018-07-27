const Discord = require('discord.js');
const client = require('../index.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
var search = require('youtube-search');
var ffmpeg = require("ffmpeg-binaries");
var moment = require("moment");
moment.locale("fr");

var dispatcher;

let queues = {};

const opts = {
    part: 'snippet',
    maxResults: 3,
    key: "token api youtube"
}

const fonctions = {

    enqueue(guild) {    


       if (!guild) return;
       if (typeof guild == 'object') guild = guild.id
       if (queues[guild]) return queues[guild]
       else queues[guild] = []
       return queues[guild]
   },

     play(message, queue, song) {
       
    try {

       if (!message || !queue) return;

       if (song) {

           search(song, opts, function(err, results) {
              
               if (err) return message.channel.send(":x: video not found !"); 
               
               song = (song.includes("https://" || "http://")) ? song : results[0].link

               let stream = ytdl(song, {
                   audioonly: true
               })

               let test;

               if (queue.length === 0) test = true

               queue.push({
                   "title": results[0].title,
                   "channel": message.channel,
                   "requested": message.author,
                   "toplay": stream,
                   "link": results[0].link,
                   "publication": moment(results[0].publishedAt).format('LLL'),
                   "channelTitle": results[0].channelTitle,
                   "description": results[0].description,
                   "thumbnails": results[0].thumbnails.default.url,
                   "videoId": results[0].id,
               })
               
              // let embed = new Discord.RichEmbed()
              // .setThumbnail(queue[0].thumbnails) 
              // .setColor("0a5870")
              // .setTitle('Adding to queue')
              // .setURL(queue[0].link)
              // .setDescription(`**${queue[0].title}**`)
              // .addField("channel", message.channel.name, true)
              // .addField("Channel Title", queue[0].channelTitle, true)

              // message.channel.send(embed);

              message.channel.send(`:youtube: Searching \`${message.content.split(" ").slice(1).join(" ")}\``)
           
           if (test) {
                   setTimeout(function() {
                       fonctions.play(message, queue)
                   }, 1000)
               }
           })
       } else if (queue.length != 0) {
           
           if (!message.guild.voiceConnection) return message.channel.send("i'm not connected");

   ytdl.getInfo(queue[0].link, (err, info) =>{
           message.channel.send(`Playing now :notes: \`${queue[0].title}\``)
   })

           dispatcher = message.guild.voiceConnection.playStream(queue[0].toplay)

           dispatcher.on('error', () => {
               queue.shift()
               fonctions.play(message, queue)
           })

           dispatcher.on('end', () => {	
               setTimeout(() => {
               if (queue.length > 0) { 
                   queue.shift()
                   fonctions.play(message, queue) 
               } 
           }, 1000)
       })
           
       } else {
           message.channel.send("queue is empty !")
           
       }
   } catch (err) {
       if(err) return console.log(`[Erreur] ${err}`)    
   }
 },
    randomColor() {

 const colors = [0xED0505, 0xEDE605, 0x05ED52, 0x05AFED, 0xE605ED, 0xED0543, 0xC5C6C5, 0x111311];
 
 return colors[Math.floor(Math.random() * colors.length)];
 },

  time(temps){
       let retour = "";
       if (temps<60) {
           retour = `${temps}s`;
       } else if (temps<3600) {
           retour = `${Math.floor(temps/60)}:${temps%60}`;
       } else if (temps<86400) {
           retour = `${Math.floor(temps/3600)}:${Math.floor(temps%3600/60)}:${temps%3600%60}`;
       } else if (temps<604800) {
           retour = `${Math.floor(temps/86400)}:${Math.floor(temps%86400/3600)}:${Math.floor(temps%86400%3600/60)}:${temps%86400%3600%60}`;
       }
       return retour;
 },
}

module.exports = fonctions;
