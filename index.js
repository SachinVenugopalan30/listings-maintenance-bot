const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const config = require('./config');

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
	bot_array = ["76561198845896241", "76561199118546232"]; //Add your bot's id64 here
	var msg_ctr = 0
	client.on('friendMessage', function(steamID, message){
		console.log("Message from "+steamID.getSteamID64()+": " + message);
		message = message.substring(2).trim();
		//console.log(message)
		if(message.startsWith("You need to wait") || message.startsWith("Nothing")){
			msg_ctr+=2;
		}
		else{
			msg_ctr+=1;
		}
		//console.log(msg_ctr)
		if(msg_ctr == 4){
			console.log("Exiting the program...")
			process.exit(0)
		}
		})

	for(let bot of bot_array){
		client.chatMessage(bot, "!refreshlist")
	}
}

