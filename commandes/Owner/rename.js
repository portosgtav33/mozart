exports.run = (client, message) => {


    let suffix = message.content.split(" ")[1];
    if (!suffix) return message.channel.send(`:x: un nouveau nom pour le bot est requis`)

            
            client.user.setUsername(message.content.substr(8));
    message.channel.send(`Changements effectués, le nouveau nom est **${message.content.substr(8)}**`)
            
            

};

exports.help = {
    name: "rename",
    description: "renommer le bot",
    usage: "rename"
}