    const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    msg.delete();
    const embed = new Discord.RichEmbed()
        .setColor(0xFF0055)
        .setAuthor('IAmNavaz ', bot.user.avatarURL)
        .setTimestamp()
        .addField('Server Owner', msg.guild.owner.user.username)
        .addField('Users', msg.guild.memberCount)
        .addField('Roles', msg.guild.roles.size)

      msg.channel.sendEmbed(embed);
      return;
  };

  exports.info = {
      name: 'ut',
      description: 'usercount',
      usage: 'ut'
      
  };


/// Made by navaz 