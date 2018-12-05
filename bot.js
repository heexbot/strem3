const Discord = require("discord.js");
const client = new Discord.Client();
var adminprefix = "i";
const developers = ["425682014931517445","323888904602124299"]

  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**تم تغيير الستريمنق الى** **${argresult}**`)
  }
 
}
});








client.login(process.env.BOT_TOKEN);
