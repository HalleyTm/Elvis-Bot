const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalýsýn!`);
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('? Uyarý ?', 'Bu  komutu özel mesajlarda kullanamazsýn.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacam onuda yazý ver.').catch(console.error);
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazý ver.');
  message.delete();
  message.reply('Mesajýný Gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Sahibimden Bir Mesajýn Var**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'dmgönder',
  description: 'Bir kullanýcýya özel mesaj yollar.',
  usage: 'mesajat'
};