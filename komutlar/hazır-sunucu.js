const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
          message.guild.createCategory(`ÖNEMLİ KANALLAR`, 'category');
          message.guild.createChannel(`💎-kurallar`);
        message.guild.createChannel(`💎-duyuru`);
            message.guild.createCategory(`Sohbet Kanalları`, 'category');
          message.guild.createChannel(`💎-oylama`);
        message.guild.createChannel(`💎-Sohbet`);
          message.guild.createChannel(`💎-bot-komut`);
            message.guild.createChannel(`💎-foto-gif`);
              message.guild.createChannel(`💎-nsfw`);
              message.guild.createChannel(`💎-gelen-giden`);
              message.guild.createChannel(`mod-log`);
          message.guild.createCategory(`Ses Kanalları`, 'category')
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ①`, 'voice');
          message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ②`, 'voice');
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ③`, 'voice');
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ④`, 'voice');
        message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ⑤`, 'voice');
        message.guild.createChannel(`  ♫ Müzik Odası`, 'voice');
          message.guild.createChannel(`╠ ● βεκlεʍε øδα$ı`, 'voice');


  



        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazır-sunucu',
  description: 'Bot İçin Gerekli Kanalları Kurar.',
  usage: 'g!kurulum'
};
