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
                name: 'Injection Method',
                value: `• Start "GTA V".
• Load in Story-Mode.
• Start "Xenos64" as Administrator.
• Choose Process: "gta5.exe".
• Choose Inmage: "d3sk1ng.dll "- press "Add".
• Press "Advanced".
• Injection-Type - Choose "Manual Map".
• Press Inject.
• Close the Injector and the menu will open with NUMPAD * or INSERT.

• You can also watch this Video who explains everything if you dont understand the guide:
<https://www.youtube.com/watch?v=jTcHAt0OYOI&feature=youtu.be>

**IMPORTANT:** Make sure Xenos64.exe it's not blocked, left click, properties, and uncheck the "Read-only/blocked" box, then press apply.`,
            }],
            footer: {
                text: ''
            },
            color: 0x427fd6
        }
    }).then(m => m.delete(120000));
};
exports.info = {
    name: 'inject',
    description: 'Show users this if they are crashing when injecting.',
    usage: 'inject'
};
