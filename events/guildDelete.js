var fs = require('fs');
const Discord = require('discord.js');
module.exports = guild => {

    const client = guild.client;

    const embed = new Discord.RichEmbed()
        .setAuthor("Serveur quitté", "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/matte-white-square-icons-alphanumeric/124324-matte-white-square-icon-alphanumeric-minus-sign-simple.png")
        .setThumbnail(guild.iconURL)
        .setFooter('© Mario', client.user.avatarURL)
        .addField('Nom', guild.name, true)
        .addField('**Région**', `**${guild.region}**`, true)
        .addField('Owner', `${guild.owner.user.username}\n${guild.owner.user.tag}\n${guild.owner}`, true)
        .addField('nombre de membre', guild.memberCount, true)
        .setTimestamp()
        .setColor(3447003)
    
    guild.owner.send(`Salut, merci de m'avoir utilisé dans votre serveur **${guild.name}** !\n\nQuelques liens:\n\nWebsite: <https://portosgtav.com/description.html>\nSupport: <https://discord.gg/Z2KbA9g>\nDonation: <https://www.paypal.me/PortosLobby>\n\nSi vous avez retiré **${client.user.username}** de votre serveur nous voudrions savoir pour quelles raisons ? \n\nBugs ?\nJ'ai trouvé mieux !\nTrop souvent hors ligne`);

    client.guilds.get('273041852998090753').channels.get(`413751732057931806`).send({ embed });
};
