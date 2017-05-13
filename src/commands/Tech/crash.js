exports.run = (client, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: client.user.avatarURL,
            },
            thumbnail: {
                url: 'https://i.imgur.com/9QEq7yx.png'
            },
            fields: [{
                name: 'Crashes are caused by',
                value: `• Not running the injector as Admin
• Not running the game as Admin
• Not selecting Manual Map
• GTA is in full screen while injecting
• Pressing "K" to fill in the user name on the log in screen
• Having the old D3sk1ng files in you GTA directory
• Pressing inject button more than once
• Steam users going online`,
            }],
            footer: {
                text: 'Make sure to read this before asking support more questions.'
            },
            color: 0x427fd6
        }
    }).then(m => m.delete(120000));
};
exports.info = {
    name: 'crash',
    description: 'Show users this if they are crashing when injecting.',
    usage: 'crash'
};
