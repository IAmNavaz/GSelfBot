exports.run = (bot, message) => {
    message.editEmbed(
        bot.utils.embed('', '', [
            {
                name: '__**Prices**__:',
                value: '**Premium**: $15 | **VIP upgrade**: $10 | **Bundle**: $22.5'
            },
            {
                name: 'Paysafe Cards:',
                value: '<@70545408530579456>, <@269114887475691520>, <@201676782359937024>, <@138636180790050816>'
            },
            {
                name: 'Google Play Giftcards:',
                value: '<@269114887475691520>, <@201676782359937024>',
                inline: true
            },
            {
                name: 'Steam Giftcards:',
                value: '<@70545408530579456>, <@269114887475691520>, <@201676782359937024>, <@138636180790050816>'
            },
            {
                name: 'iTunes Giftcards:',
                value: '<@70545408530579456>, <@269114887475691520>',
                inline: true
            },
            {
                name: 'Amazon Giftcards:',
                value: '<@70545408530579456>'
            }
        ], {})
            .setAuthor('d3sk1ng Purchase Info:', `${message.author.avatarURL}`)
            .setFooter('All Admins take PayPal, Admins are busy and may not reply fast. Be patient.')
            .setThumbnail('http://i.imgur.com/9QEq7yx.png')
    ).then(m => m.delete(120000));
    message.channel.sendMessage('You can click the names above to private message them. You are just one click away!').then(m => m.delete(120000));
};

exports.info = {
    name: 'buyinfo',
    description: 'All the payment methods, more info than the command "buy"',
    usage: 'buyinfo',
    credits: 'Navaz, Einar'
};
