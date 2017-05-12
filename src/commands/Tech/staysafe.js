exports.run = (bot, message) => {
    message.channel.sendMessage({
        embed: {
            author:{
                icon_url: bot.user.avatarURL
            },
            fields: [{
                name: 'StaySafe',
                value: 'First of all, please keep in mind that modding is against the rules, it\'ll never be 100% safe and there is always the risk of getting suspended.\n•Getting reported is a big risk for modders, try to avoid it!\n•Solo sessions do not make anything more safe! It is, in fact, a bigger risk.\n\n**+ The following points are guidelines of what\'s generally considered to be a risk or not:**\n\n**- Definitely not safe** \n\n•Storing spawned cars in your garage.\n•Selling spawned cars.\n•Dropping money using old methods.\n•Ped Cash using old methods.\n•RP editing. [lite version]\n•Max stats. [lite version]\n•Unlocks. [lite version]\n\n**- Small risk**\n\n•RP editing. [premium version]\n•Max stats. [premium version]\n•Unlocks. [premium version]\n•Receiving money bags.\n\n**+Safe**\n\n•Dropping money using the new and safe method.\n•Ped Cash using the new and safe method.\n•50k remote.\n•Teleporting.\n•Object/vehicle spawning.\n•Banking money (received from money bags).\n•Everything else that doesn\'t get you reported.\n',
                inline: false,
            }
            ],
            color: 0x99FFFF
        }
    });
    message.delete();
    message.channel.sendMessage('**__If this does not answer your question, contact Tech Support in #tech-support for more info.__**');
};


exports.info = {
    name: 'staysafe',
    description: 'Info on whats Safe, Kinda unsafe, unsafe.',
    usage: 'staysafe'
};
