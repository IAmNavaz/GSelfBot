exports.run = (client, message) => {
    message.channel.sendMessage({
        embed: {
            author: {
                icon_url: client.user.avatarURL,
            },
            fields: [{
                name: 'Crashes are caused by',
                value: `• Not running the injector as Admin\n
• Not running the game as Admin\n
• GTA is in full screen while injecting \n
• Not selecting Manual Map \n
• Pressing "K" to fill in the user name on the log in screen\n
• Having the old D3sk1ng files in you GTA directory\n
• Steam users going online\n`,
            }],
            footer: {
                text: 'Make sure to read this before asking support more questions.'
            },
            color: 0x99FFFF,
            thumbnail: {
                url: 'http://i.imgur.com/qh2gBeW.png'
            }
        }
    });
    message.delete();
};
exports.info = {
    name: 'injectcrash',
    description: 'Show users this if they are crashing when injecting.',
    usage: 'injectcrash'
};
