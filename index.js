// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Life goes on and on and on');
});

// Tentando trocar o prefixo do BOT
/*
const prefix = '+'

client.on('InteractionCreate', async msg => {
  // not start with prefix -> return early
  if (!msg.content.startWith(prefix)) return;

  // remove prefix to get command name
  const commandName = msg.content.slice(prefix.length);

  // check for command name directly
  if (commandName === 'xama') {
    // do something
  } else if (commandName === 'jsfun') {
    await interaction.reply('Ibira disse que existem livros sagrados que podem te dizer mais sobre isso... MDN = https://developer.mozilla.org/en-US/docs/Web/JavaScript');
  }
}
*/

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'server') 
    { 
        await interaction.reply(`:green_circle: Ibira notou que o server se chama:\n **${interaction.guild.name}** ! \n e foi criado em "${interaction.guild.createdAt}"`);
    }
    /* 
    else if (commandName === 'jsfun') {
        await interaction.reply('Ibira disse que existem livros sagrados que podem te dizer mais sobre isso... MDN = https://developer.mozilla.org/en-US/docs/Web/JavaScript');
    } else if (commandName === 'ajuda') {
        await interaction.reply('O Xamã está dormindo, volte mais tarde **zZZZZzzzZZZZZzz**');
    }
    */
});
 
// Login to Discord with your client's token
client.login(token);
