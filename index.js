const Discord = require("discord.js");


const client = new Discord.Client();


client.on("message", (message) => {
    if (message.author.bot) return;

    const command = message.content;

    if (command === "f" || command === "F") {
        message.channel.send(`${message.member.user.username} madre mia willy`);
    }
});


client.login(process.env.BOT_TOKEN);