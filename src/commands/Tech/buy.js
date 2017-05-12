exports.run = (client, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: client.user.avatarURL,
                url: ''
            },
            fields: [{
                name: 'D3sk1ng Premium/VIP',
                value: '\n- Premium (+) is for $15 \n- VIP (upgrade from Premium) is for $10 \n- Bundle (Premium + VIP) is for $25 (with discount it\'s €22,50).\nPM an Admin to purchase the menu.',
                inline: false,
            }
            ],
            footer: {
                text: 'message will disappear in 1 minute.'
            },
            color: 0x99FFFF
        }
    }).then(m => m.delete(60000));
};

exports.info = {
    name: 'buy',
    description: 'Info on the prices',
    usage: '',
    credits: 'Navaz, Einar'
};
