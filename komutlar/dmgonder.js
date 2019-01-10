const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek i�in **Y�netici** iznine sahip olmal�s�n!`);
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('? Uyar� ?', 'Bu  komutu �zel mesajlarda kullanamazs�n.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacam onuda yaz� ver.').catch(console.error);
  if (reason.length < 1) return message.reply('Ne g�ndericem onuda yaz� ver.');
  message.delete();
  message.reply('Mesaj�n� G�nderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Sahibimden Bir Mesaj�n Var**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','�m'],
  permlevel: 4
};

exports.help = {
  name: 'dmg�nder',
  description: 'Bir kullan�c�ya �zel mesaj yollar.',
  usage: 'mesajat'
};