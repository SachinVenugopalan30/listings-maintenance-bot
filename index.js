const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const config = require('./config/config');

const client = new SteamUser();


const logInOptions = {
	accountName: config.accountName,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.sharedSecret)
};

client.logOn(logInOptions);

client.on('loggedOn', () => {
	console.log('Logged on to Steam');
	client.setPersona(SteamUser.EPersonaState.Online);
	client.gamesPlayed(440);
	console.log("Set game to TF2")
	sendMessage();
	//client.chatMessage("76561199118546232", "!help")
	
});



function sendMessage(){
	bot_array = ["76561198845896241", "76561199118546232"];

	client.on('friendMessage', function(steamID, message){
		console.log("Message from "+steamID.getSteamID64()+": " + message);
	})

	for(let bot of bot_array){
		client.chatMessage(bot, "!refreshlist")
	}
}
