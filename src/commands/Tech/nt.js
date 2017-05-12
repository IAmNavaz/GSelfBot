exports.run = (bot, message) => {
    message.editEmbed(
        bot.utils.embed('', 'This is not a help channel, go to our [tech support](https://discord.gg/rUb9wxX) channel to ask any questions. People there will help you on everything you want step by step. If there is no one to answer at that given time please have patience since we are all just humans.', [], {})
            .setAuthor('Want Help? Go here:', `${message.author.avatarURL}`)
    );
};

exports.info = {
    name: 'nt',
    description: 'How may I help you?',
    usage: 'nt',
    credits: 'Glider'
};
