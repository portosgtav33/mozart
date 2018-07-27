var fs = require('fs');
const Discord = require('discord.js');
module.exports = guild => {

    const client = guild.client;

    const embed = new Discord.RichEmbed()
        .setAuthor("Serveur rejoin", "http://www.clker.com/cliparts/u/F/K/J/M/A/add-button-hi.png")
        .setThumbnail(guild.iconURL)
        .setFooter('© Mario', client.user.avatarURL)
        .addField('Nom', guild.name, true)
        .addField('**Région**', `**${guild.region}**`, true)
        .addField('Owner', `${guild.owner.user.username}\n${guild.owner.user.tag}\n${guild.owner}`, true)
        .addField('nombre de membre', guild.memberCount, true)
        .setTimestamp()
        .setColor(3447003)

        var prefix = '$';
    guild.owner.send(`Salut, merci de m'avoir ajouté dans votre serveur **${guild.name}** !\n\nQuelques liens:\n\nWebsite: <https://portosgtav.com/description.html>\nSupport: <https://discord.gg/Z2KbA9g>\nDonation: <https://www.paypal.me/PortosLobby>\n\nEcrivez ${prefix}help dans votre serveur pour avoir la liste des toute mes commandes.`)


    client.guilds.get('273041852998090753').channels.get(`413751732057931806`).send({ embed });
};
