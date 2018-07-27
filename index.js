const Discord = require('discord.js');
const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: true,
});
const settings = require('./settings.json');
const fs = require('fs');
const moment = require('moment');
moment.locale("fr");
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};



client.commandsinfo = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commandes/Infos', (err, files) => {
  if (err) return client.guilds.get('470510362156859392').channels.get(`470589126148751361`).send(err);
  files.forEach(f => {
    const props = require(`./commandes/Infos/${f}`);
    client.commandsinfo.set(props.help.name, props);
  });
});



client.commandsmusique = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commandes/Musique', (err, files) => {
  if (err) return client.guilds.get('470510362156859392').channels.get(`470589126148751361`).send(err);
  files.forEach(f => {
    const props = require(`./commandes/Musique/${f}`);
    client.commandsmusique.set(props.help.name, props);
  });
});



client.commandsowner = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commandes/Owner', (err, files) => {
  if (err) return client.guilds.get('470510362156859392').channels.get(`470589126148751361`).send(err);
  files.forEach(f => {
    const props = require(`./commandes/Owner/${f}`);
    client.commandsowner.set(props.help.name, props);
  });
});

fs.readdir('./fonctions/', (err, files) => {
  if (err) return console.log(err);
  console.log(`Nombre de plugins en chargement ${files.length}`);

  files.forEach((f) => {
    const fonctions = require(`./fonctions/${f}`);
    client[f.split('.')[0]] = fonctions;
  });
});


client.login(settings.token);

module.exports = client;