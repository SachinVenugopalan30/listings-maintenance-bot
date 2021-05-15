# The purpose of this bot is to send a message to keep listings updated.
- Sometimes, my trade bots fail to list certain items, or it lists them for a while before unlisting them.
- I created this script to ensure that all items contained in the bots' inventories are listed and remain listed.

## Requirements
- You will need a Steam account that is **NOT** one of your trading bots, unless it is not in use. You can use your own Steam account, however you must have your shared secret.
- Latest version of NodeJS

## Installation and Setup
- Clone the repo or download the zip somewhere and extract the contents
- Navigate to the folder and run `npm i` to install the required dependancies.
- Open `config.js` in a text editor of your choice and add in the account's details to the variables in quotes.

## Running the bot
- Run the program from terminal using `node index.js`, the Steam account you set should log in and set the game to TF2, you can also see the messages received from the trade bots in the console.

## Running into any issues? Feel free to let me know.