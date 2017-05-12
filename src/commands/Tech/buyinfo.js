exports.run = (client, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: client.user.avatarURL
            },
            fields: [{
                name: '----------------D3SK1NG Price---------------------',
                value: '==>Premium- $15-€15-£15\n==>VIP Upgrade -$10-€10-$10 (Premium Only)\n==>Bundle- $22.50-€22.50-£22.50\n----------------Who To Buy From-------------------\nContact any of the following admins to buy!\nAll sellers accept PayPal and Steam giftcards.\n\n+Paysafe cards:\n@Bluetexon\n<@70545408530579456>\n@DarkC\n@Kiro |  有難うございます。\n\n+Google play cards:\n@DarkC\n@Kiro |  有難うございます。\n\n+Itunes giftcards:\n<@70545408530579456>\n@DarkC\n\n+Amazon giftcard:\n<@70545408530579456>\n\n-Other payment methods are not possible.\n\n**---------------------------------------------------**',
                inline: false,
            }
            ],
            footer: {
                text: 'message will disappear in 1 minute.'
            },
            color: 0x99FFFF
        }
    }).then(m => m.delete(60000));
    message.channel.sendMessage('Remember, Admins aren\'t online 24/7 AND they get loads of messages constantly.\nSo please wait patiently for response.');
};

exports.info = {
    name: 'buyinfo',
    description: 'All the payment methods, more info than the command "buy"',
    usage: 'buyinfo',
    credits: 'Navaz, Einar'
};
