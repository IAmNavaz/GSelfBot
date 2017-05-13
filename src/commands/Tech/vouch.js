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
                name: 'Problem Solved?',
                value: `Did I help you get your problem solved? Then please Vouch for me!\nPlease head over to [vouch channel](https://discord.gg/RxuFyfk) and type \`>rep ${client.user.tag}\``,
            }],
            footer: {
                text: 'Make sure to read this before asking support more questions.'
            },
            color: 0x427fd6
        }
    });
};
exports.info = {
    name: 'vouch',
    description: 'Vouch the guy who help you out',
    usage: 'vouch'
};
