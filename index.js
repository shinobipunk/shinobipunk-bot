const Discord = require("discord.js");


const client = new Discord.Client();


client.on("message", (message) => {
    if (message.author.bot) return;

    const command = message.content;

    if (command === "f" || command === "F") {
        message.channel.send(`${message.member.user.username} madre mia willy`);
    }
});

client.on("message", (message) => {
    if (message.author.bot) return;

    const btoTexto = [
        "bto",
        "beto",
        "Beto"
    ];

    const btoFrases = [
        "Compra Doge",
        "Te vendo unos audifonos gamer",
        "Alguien dijo nepe",
        "Ya Ferrales",
        "Monstruo"
    ];

    const btoRespuesta = Math.floor(Math.random() * btoFrases.length);

    const command = message.content;

    for (let i = 0; i < btoTexto.length; i++) {
        if (command.includes(btoTexto[i])) {
            message.channel.send(btoFrases[btoRespuesta]);
            break;
        }
    }
});


client.login(process.env.BOT_TOKEN);