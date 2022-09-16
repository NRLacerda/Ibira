// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'xama') { 
        await interaction.reply(`O Xamã Ibira foi invocado em: ${interaction.guild.name} ! **efeitos sonoros de batalha**`);
    } else if (commandName === 'jsfun') {
        await interaction.reply('Ibira disse que existem livros sagrados que podem te dizer mais sobre isso... MDN = https://developer.mozilla.org/en-US/docs/Web/JavaScript');
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
});
 
// Login to Discord with your client's token
client.login(token);
