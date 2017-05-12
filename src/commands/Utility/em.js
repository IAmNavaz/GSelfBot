const Discord = require('discord.js');
exports.run = (bot, message, args) => {
    const embed = new Discord.RichEmbed();
    embed.addField(bot.user.username, args.join(' '));
    embed.setThumbnail(bot.user.displayAvatarURL);
    embed.setColor(0xFF0000);
    message.edit(embed);
};

exports.info = {
    name: 'em',
    usage: 'em [text]',
    description: 'Sends a message via embeds (with thumbnail)'
};
