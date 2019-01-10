//reklam tespit edildi baslangıc


client.on("message", msg => {
    const uyarıembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription("Heey   + msg.author +  ---> Reklam Yapmayı Kes Bu Sunucuda Anti-Reklam Koruması Var. !! ")

const dmembed = new Discord.RichEmbed()
  .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
  .setColor(0x00AE86)
  .setDescription("Sunucunda Reklam Yapıyor !!!uyar komutu ile kişiyi uyara bilirsin fakat `mod-log` kanalın olması lazım.")
  .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?") && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(uyarıembed)
     msg.guild.owner.send(dmembed).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })
//reklam tespit edildi bitti
