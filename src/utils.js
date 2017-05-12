const bot = require('./bot');
const RichEmbed = require('discord.js').RichEmbed;

exports.randomSelection = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)];
};

exports.randomColor = () => {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
};

exports.formatNumber = (number) => {
    if (isNaN(number)) return NaN;
    let input = `${number}`;
    if (number < 1e4) return input;
    let out = [];
    while (input.length > 3) {
        out.push(input.substr(input.length - 3, input.length));
        input = input.substr(0, input.length - 3);
    }
    return `${input},${out.reverse().join(',')}`;
};

const randomFooter = () => {
    return exports.randomSelection([
        'just add water!',
        'Powered by squirrels!',
        'codeisluvcodeislife',
        'Where did you get that?',
        'WHAT DID YOU BREAK!?',
        'D-D-D-DROP THE BASS',
        'Eat, Sleep, Dubstep',
        'Glider sucks',
        'Skidded SharpBot',
        'pew pew'
    ]);
};

exports.embed = (title, description = '', fields = [], options = {}) => {
    let url = options.url || '';
    let color = options.color || this.randomColor();

    if (options.inline) {
        if (fields.length % 3 === 2)
            fields.push({
                name: '\u200b',
                value: '\u200b'
            });
        fields = fields.map(obj => {
            obj.inline = true;
            return obj;
        });
    }
    if (url !== '') description += '\n';

    return new RichEmbed({
        fields,
        video: options.video || url
    })
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setImage(options.image || url)
        .setTimestamp(options.timestamp ? timestampToDate(options.timestamp) : null)
        .setFooter(options.footer === true ? randomFooter() : (options.footer ? options.footer : ''), options.footer ? bot.client.user.avatarURL : undefined)
        .setAuthor(options.author === undefined ? '' : options.author)
        .setThumbnail(options.thumbnail || url);
};

function timestampToDate(timestamp) {
    if (timestamp === true) {
        return new Date();
    }
    if (typeof timestamp === 'number') {
        return new Date(timestamp);
    }
    return timestamp;
}

exports.parseArgs = (args, options) => {
    if (!options)
        return args;
    if (typeof options === 'string')
        options = [options];

    let optionValues = {};

    let i;
    for (i = 0; i < args.length; i++) {
        let arg = args[i];
        if (!arg.startsWith('-')) {
            break;
        }

        let label = arg.substr(1);

        if (options.indexOf(label + ':') > -1) {
            let leftover = args.slice(i + 1).join(' ');
            let matches = leftover.match(/^"(.+?)"/);
            if (matches) {
                optionValues[label] = matches[1];
                i += matches[0].split(' ').length;
            } else {
                i++;
                optionValues[label] = args[i];
            }
        } else if (options.indexOf(label) > -1) {
            optionValues[label] = true;
        } else {
            break;
        }
    }

    return {
        options: optionValues,
        leftover: args.slice(i)
    };
};

exports.multiSend = (channel, messages, delay) => {
    delay = delay || 100;
    messages.forEach((m, i) => {
        setTimeout(() => {
            channel.sendMessage(m);
        }, delay * i);
    });
};

exports.sendLarge = (channel, largeMessage, options = {}) => {
    let message = largeMessage;
    let messages = [];
    let prefix = options.prefix || '';
    let suffix = options.suffix || '';

    let max = 2000 - prefix.length - suffix.length;

    while (message.length >= max) {
        let part = message.substr(0, max);
        let cutTo = max;
        if (options.cutOn) {
            cutTo = part.lastIndexOf(options.cutOn);
            part = part.substr(0, cutTo);
        }
        messages.push(prefix + part + suffix);
        message = message.substr(cutTo);
    }

    if (message.length > 1) {
        messages.push(prefix + message + suffix);
    }

    this.multiSend(channel, messages, options.delay);
};

exports.now = () => {
    let now = process.hrtime();
    return now[0] * 1e3 + now[1] / 1e6;
};

exports.playAnimation = (msg, delay, list) => {
    if (list.length < 1)
        return;

    let next = list.shift();
    let start = this.now();

    msg.edit(next).then(() => {
        let elapsed = this.now() - start;

        setTimeout(() => {
            this.playAnimation(msg, delay, list);
        }, Math.max(50, delay - elapsed));
    }).catch(bot.client.logger.severe);
};
