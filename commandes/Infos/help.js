exports.run = async (client, message, params) => {

    var prefix = '!';
  
      if (!params[0]) {
          message.channel.send({embed: {
              title: `${client.user.username}`,
            description: `**Use !help [commandname] for more informations**`,
            color: 0x0a5870,
              fields: [{
                name: `<a:m_:464826732466405376> Informations`,
                  value: `${client.commandsinfo.map(c => `\`${c.help.name}\``).join(' ')}`
                },
                {
                  name: `<a:party:464530030433927178> Musique`,
                  value: `${client.commandsmusique.map(c => `\`${c.help.name}\``).join(' ')}`
                },
                {
                  name: `<:gyro:442678338813952021> Owner`,
                  value: `${client.commandsowner.map(c => `\`${c.help.name}\``).join(' ')}`
                }
              ],
              thumbnail: {
                          url: client.user.avatarURL,
                      },
              footer: {
                icon_url: client.user.avatarURL,
                text: "© " + client.user.username+ ""
              }
            }
          });      
    } else {
      let command = params[0];
      if (client.commandsmusique.has(command)) {
        command = client.commandsmusique.get(command);
        message.channel.send({
          color: 0x0a5870,
          embed: {
            title: `__**${command.help.name}**__`,
            description: `**${command.help.description}**`,
            fields: [{
              name: "Usage",
              value: `${prefix}${command.help.usage}`
            },
            ],
            thumbnail: {
              url: client.user.avatarURL,
            },
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© " + client.user.username+ ""
            }
          }
        });
      }
        else {
          let command = params[0];
          if (client.commandsowner.has(command)) {
            command = client.commandsowner.get(command);
            message.channel.send({
              color: 0x0a5870,
              embed: {
    
                title: `__**${command.help.name}**__`,
                description: `**${command.help.description}**`,
                fields: [{
                  name: "Usage",
                  value: `${prefix}${command.help.usage}`
                },
                ],
                thumbnail: {
                  url: client.user.avatarURL,
                },
  
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© " + client.user.username+ ""
                }
              }
            });
          }
          else {
            let command = params[0];
            if (client.commandsinfo.has(command)) {
              command = client.commandsinfo.get(command);
              message.channel.send({
                color: 0x0a5870,
                embed: {
      
                  title: `__**${command.help.name}**__`,
                  description: `**${command.help.description}**`,
                  fields: [{
                    name: "Usage",
                    value: `${prefix}${command.help.usage}`
                  },
                  ],
                  thumbnail: {
                    url: client.user.avatarURL,
                  },
    
                  footer: {
                    icon_url: client.user.avatarURL,
                    text: "© " + client.user.username+ ""
                  }
                }
              });
            }
          }
      }
  }
    
  };
  
  exports.help = {
      name: "help",
      description: "help",
      usage: "help"
  }