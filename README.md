#### Table of contents
- [Requirements](#requirements)
- [Installing](#installing)
- [Running](#running)
- [Getting your user-token](#getting-your-user-token)
- [Credits](#credits)

## Usage
### Requirements
- `git` ([Windows](https://git-scm.com/download/win) | [Linux](https://git-scm.com/download/linux) | [macOS](https://git-scm.com/download/mac))
- `node` ([Windows](https://nodejs.org/en/download/current/) | [Linux](https://nodejs.org/en/download/package-manager/) | [macOS](https://nodejs.org/en/download/current/))
- `yarn` ([Windows](https://yarnpkg.com/en/docs/install#windows-tab) | [Linux](https://yarnpkg.com/en/docs/install#linux-tab) | [macOS](https://yarnpkg.com/en/docs/install#mac-tab))

### Installing
#### Normal installation
```
# Download the bot
git clone https://github.com/TheGoGlider/GSelfBot
# Enter the bot folder
cd GSelfBot 
# Install dependencies
yarn install
```

Now run `yarn start` to start the bot. 

**Note:** The first time you start the bot you will enter the setup wizard. It takes just a few seconds to enter the needed information, and it sets up the bot for you.

### Updating
Minor updates can be acquired by running `//exec git pull` in Discord to run the `git pull` command on your computer. Some updates, however, change too much to be updated like that, and instead you must do the following commands in your terminal/command prompt:

```bash
# Go to the GSelfBotBot folder
cd path/to/GSelfBot
# Pull in any changes
git pull
# Install new dependencies
yarn install
```

### Running
```
# Go to the GSelfBot folder
cd path/to/GSelfBot
# Start the bot up
yarn start
```

### Getting your user-token
1. Hit `CTRL+SHIFT+I` (`CMD+ALT+I` on macOS) to bring up the Developers Console
> If you already see the `Application` tab, you can skip step 2
2. At the top, click on the arrow pointing to the right
3. Click `Application`
4. Go to `Local Storage` under the `Storage` section
5. Click on `https://discordapp.com`
6. At the bottom of the list, the last key should be `token`
7. Copy the value on the right side (omitting the quotes)

## Credits
This bot is a modified version of SharpBot made by Rayzr
