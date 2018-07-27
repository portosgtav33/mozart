var moment = require('moment');
module.exports = client => {
  moment.locale("fr");
  client.guilds.get('470510362156859392').channels.get(`470589163058757672`).send(`**${client.user.tag}** is just reconnecting`);
};
