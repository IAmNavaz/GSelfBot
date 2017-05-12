const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (!user) return;
    const warnedpm = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor('Warning', client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .addField('Action', 'Warning', true)
        .setDescription(`You have been warned for: \`${reason}\`. There is no further warning, just direct kick/ban. If this was wrongly applied then you can contact one of the Co-Legends to clarify. Being good to the community will get this removed.`)
        .addField('Moderator', `${message.author.username}#${message.author.discriminator} (${message.author.id})`, true);
    const embed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor('Warning', client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .addField('Action', 'Warning')
        .addField('Reason', `${reason}`, true)
        .addField('User', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Moderator', `${message.author.username}#${message.author.discriminator} (${message.author.id})`);
    message.delete();
    message.guild.member(user).sendEmbed(warnedpm);
    message.channel.sendEmbed(embed);
};

exports.info = {
    name: 'warn',
    description: 'warns a mis-behaving user thats being a cunt?',
    usage: 'warn <user> <reason>'
};
