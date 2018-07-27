const Discord = require("discord.js");
var snekfetch = require("snekfetch");
module.exports = client => { 

  var commandenbr = client.commandsinfo.map(c => c).length + client.commandsmusique.map(c => c).length + client.commandsowner.map(c => c).length;

console.log('ONLINE');
  const embed = new Discord.RichEmbed()
  .setTitle('Stats')
  .setColor(3447003)
  .setFooter(`© Mario`, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .addField("Servers", client.guilds.size, true)
  .addField("Channels", client.channels.size, true)
  .addField("Users", client.users.size, true)
  .addField("Totalité des commandes", commandenbr, true)
  .addField("information", client.commandsinfo.map(c => c).length, true)
  .addField("Musique", client.commandsmusique.map(c => c).length, true)
  .addField("Owner", client.commandsowner.map(c => c).length, true)
  client.guilds.get('470510362156859392').channels.get(`470589225897558016`).send(embed)

  client.guilds.get('470510362156859392').channels.get(`470589163058757672`).send(`🤖 **${client.user.tag}** is just online 🤖`);

  const Games = [`${client.guilds.size} guilds`, `${client.users.size} users`]
  setInterval(() => { client.user.setActivity(`${Games[Math.floor(Math.random() * Games.length)]}`) }, 30000)



};
