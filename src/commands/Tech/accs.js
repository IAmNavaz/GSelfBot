exports.run = (client, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: client.user.avatarURL,
            },
            thumbnail: {
                url: ''
            },
            fields: [{
                name: 'Difference between Verified and Unverified accounts',
                value: `__**Verified Account**__\nThese accounts have a verified email. Meaning that the owner get notification when friends get added and stuff related, but you can avoid this by turning all Privacy Options to OFF. Changing the email or password of this is not recommended.
\n__**Unverified Account**__\nThese accounts don\'t hav a verified email, most of the owners are inactive. You have a low risk of it being recovered if you change anything in the account(email/pass).`,
            }],
            footer: {
                text: ''
            },
            color: 0x427fd6
        }
    });
};
exports.info = {
    name: 'accs',
    description: 'Verified/Unverified accs',
    usage: 'accs'
};
