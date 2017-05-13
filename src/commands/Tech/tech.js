exports.run = (bot, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: bot.user.avatarURL
            },
            thumbnail: {
                url: 'http://i.imgur.com/qh2gBeW.png'
            },
            fields: [{
                name: 'd3sk1ng tech-support',
                value: `\n\nHello there, ${message.mentions.users.first()}. How may I help you? Please tell us everything about your problem and what you have tried to doing to fix it.`,
                inline: true,
            }],
            color: 0x99FFFF,
        }
    }).then(m => m.delete(120000));
};

exports.info = {
    name: 'tech',
    description: 'How may I help you?',
    usage: 'tech',
    credits: 'Glider'
};
