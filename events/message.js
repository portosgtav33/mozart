
module.exports = message => {
var prefix = "!";
  const client = message.client;
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  const command = message.content.split(' ')[0].slice(prefix.length);
  const params = message.content.split(' ').slice(1);
  let cmd;

  if (message.author.id == "457948588303974401") return message.channel.send('Vous êtes dans la blacklist du bot, contactez le developpeur pour en savoir plus !');

  if (client.commandsinfo.has(command)) {
    cmd = client.commandsinfo.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commandsinfo.get(client.aliases.get(command));
  }

  if (client.commandsmusique.has(command)) {
    cmd = client.commandsmusique.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commandsmusique.get(client.aliases.get(command));
  }

  if (client.commandsowner.has(command)) {
    if (message.author.id !== "231044533750726666") return message.reply('Ces commandes sont pour l\'owner seulement !').catch (err => { 
      if (err) return client.guilds.get('470510362156859392').channels.get(`470589126148751361`).send(`\`${message.author.tag}\` (\`${message.author.id}\`) viens d'effectuer la commande \`${command}\` depuis **${message.guild.name}** (${message.guild.memberCount} membres)\n\n\`${err}\``);    
  })
    cmd = client.commandsowner.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commandsowner.get(client.aliases.get(command));
  }


  try { 
  	cmd.run(client, message, params); 
  } catch (e) { 
    if (!cmd) {
      return;
    }else { 
    client.guilds.get('470510362156859392').channels.get(`470589126148751361`).send(`\`${message.author.tag}\` (\`${message.author.id}\`) viens d'effectuer la commande \`${command}\` depuis **${message.guild.name}** (${message.guild.memberCount} membres)\n\n\`${e.stack}\``);
    message.channel.send(':warning: erreur 404 <a:facepalmz:447837228345982996>');
    message.channel.send('<a:LoadingEmote:447837230182957067> Le rapport viens d\'être sauvegardé !').then(response => { response.delete(5000) });
  }} finally {
    if (!cmd) {
      return;
    } else { 
      client.guilds.get('470510362156859392').channels.get(`470589100928270336`).send(`\`${message.author.tag}\` (\`${message.author.id}\`) viens d'effectuer la commande \`${command}\` depuis **${message.guild.name}** (${message.guild.memberCount} membres)`);
    }
  }
if (message.channel.bot) return;


};
