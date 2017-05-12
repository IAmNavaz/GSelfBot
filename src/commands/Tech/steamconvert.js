exports.run = (client, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: client.user.avatarURL,
            },
            fields: [{
                name: 'HOW TO CONVERT GTA V STEAM VERSION INTO THE SC VERSION WITHOUT RE-DOWNLOADING GTA',
                value: '1. Go into Steam, right click Grand Theft Auto V and press "Properties". After that press "LOCAL FILES" then "BROWSE LOCAL FILES", this will open up your GTA V folder.\n2. Copy everything in the GTA V [STEAM] folder and paste it in a folder somewhere on your pc.\n3. Download these 3 files\nhttp://www.mediafire.com/file/nrhg77uiwnmv9pk/PlayGTAV.exe,\nhttp://www.mediafire.com/file/8y46xfi5tcsbk86/GTAVLauncher.exe &\nhttp://www.mediafire.com/file/9ss5jk94dqfm8am/GTA5.exe\n[PlayGTV.exe, GTAVLauncher.exe & GTA5.exe]\n\n4. Put those 3 files into your new GTA V folder.\n5. In the new GTA V folder, look for "steam_api_ext64.dll" & "steam_api64.dll" and delete them.\n6. Last step is to load "PlayGTAV.exe", it will download a few things such as recent updates. After that you will be able to play the game.\n',
                inline: false,
            }
            ],
            footer: {
                text: '[When converting GTA V from Steam to SC you still have to buy a SC key or an ALT acc. This is will not give you GTA V for free.] **This message will disappear in 2 minutes**'
            },
            color: 0x99FFFF,
            thumbnail: { url: 'http://i.imgur.com/qh2gBeW.png' }
        }
    }).then(m => m.delete(120000));
};

exports.info = {
    name: 'steamconvert',
    description: 'Explains how to convert Steam to SC version of GTA V',
    usage: 'steamconvert'
};
