exports.run = (client, message) => {


    message.channel.send("🔌 Je me deconnecte dans 1 minute !")
    console.log("off")
    setTimeout(function () {
        process.exit(1);
    }, 30 * 1000)

};

exports.help = {
    name: "shutdown",
    description: "eteindre le bot",
    usage:"shutdown"
}