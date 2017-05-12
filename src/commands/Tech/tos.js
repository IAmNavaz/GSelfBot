exports.run = (client, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: client.user.displayAvatarURL,
                name: 'Terms-Of-Service:'
            },
            description: `\n**Starting**
\n By using/purchasing this software, you agree to ALL of the Terms and Conditions listed below. It is important that you have read and understand the below details before purchasing. If you have any questions prior to purchasing, please hit up any of the staff members related to this menu with a private message. If we don't respond in time feel free to ask in our discord server and see if another user can answer your question (if the user is not in the staff team please don't take his/her words, it may not be 100% accurate, we aren't responsible for what happens). This menu is working on the latest version (1.39) of Grand Theft Auto V Online: PC. No other console/devices supported yet.
Please note: any of the below can change at any moment, for any reason, with or without warning. If you're already a member, please check the #announcements chat for any updates or changes.

\n**Term of Service**
\n**1.** We can change the prices of the software anytime, with or without warnings.
\n**2.** We have the right to take your auth anytime we want, with or without warnings.
\n**3.** We can reject your payment if we want to without reasons.
\n**4.** We can make any changes to our software, anytime without reasons.
\n**5.** You aren't allowed to distribute the copy of this software to anyone or any site. If caught we have full right to take away your access.
\n**6.** All purchases are final and cannot be refunded.
\n**7.** If you charge back we have full right to take away your access.
\n**8.** If there are patches/fixed made by rockstar's anticheat, it may affect our software. You're not allowed to refund for that reason. ` ,

            color: 0x99FFFF,
        }
    }).then(m => m.delete(120000));

};

exports.info = {
    name: 'tos',
    description: 'Displays terms of service For D3SK1NG Menu',
    usage: '.',
    credits: 'Navaz, Einar'
};
