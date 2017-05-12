GSelfBot running on a edited version of SharpBot.

Requirements:

node: https://nodejs.org/en/download/current/
yarn: https://yarnpkg.com/en/docs/install#windows-tab

Normal installation:

# Download the bot

# Enter the bot folder
cd GSelfBot
# Install dependencies
yarn install

Now run `yarn start` in command prompt to start the bot.
Note: The first time you start the bot you will enter the setup wizard. It takes just a few seconds to enter the needed information, and it sets up the bot for you.

Getting your user-token:

Hit CTRL+SHIFT+I (CMD+ALT+I on macOS) to bring up the Developers Console
If you already see the Application tab, you can skip step 2
At the top, click on the arrow pointing to the right
Click Application
Go to Local Storage under the Storage section
Click on https://discordapp.com
At the bottom of the list, the last key should be token
Copy the value on the right side (omitting the quotes)
