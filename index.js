// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Life goes on and on and on');
});

// Tentando trocar o prefixo do BO, Spoiler: não deu certo
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
// futuramente separar essas interações em pastas pra ser menos feio e um código mais clean.
    if (commandName === 'server') 
    { 
        await interaction.reply(`:green_circle: **Ibira** notou que o server se chama:\n **${interaction.guild.name}** !\nFoi criado em "${interaction.guild.createdAt}"`);
    }else if (commandName === 'javascript'){
        await interaction.reply(':green_circle: **Ibira** disse que existem livros sagrados que podem te dizer mais sobre isso... \n MDN = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript');
    }else if (commandName === 'ajuda') {
        await interaction.reply(':green_circle: **Ibira** tem os seguintes métodos de invocação:\n"/ajuda", "/server,"/sql","/javascript","/htmlcss"');     
    }else if (commandName === 'sql'){
        await interaction.reply(':green_circle: **SQL**? é uma linguagem de programação utilizada amplamente em Banco de Dados, baseado em "Querys",\nUma linguagem fácil de programar!\nVeja sobre em: https://blog.betrybe.com/sql/')
    }else if (commandName === 'htmlcss'){
        await interaction.reply(':green_circle: **HTML/CSS** é por onde todos começam geralmente, existe uma quantidade de informação sobre front infinta na internet!\n Da uma olhada: \nSobre HTML: https://developer.mozilla.org/pt-BR/docs/Web/HTML \nSobre CSS: https://developer.mozilla.org/pt-BR/docs/Web/CSS')
    }else if (commandName === 'bot'){
        await interaction.reply(':green_circle: Sobre **01100101 01110101**?\nFui criado em 16/09/22, pela **Organização**,\nMais especificamente pelo organizador Nicolas Cavalcanti\ncom o propósito de guiar no mundo da programação!\nFeito utilizando o guia > https://discordjs.guide/creating-your-bot/creating-commands.html#registering-commands\nTem alguma sugestão de melhoria, ou correção de bug? Manda uma DM!')
    }else if (commandName === 'nocode'){
        await interaction.reply(':green_circle: Sem código mano? ai é dificil de ajudar você\nPosta seu código aqui wrapado!\nNão sabe o que é "wrap"? Use /wrap')
    }else if (commandName == 'wrap'){
        await interaction.reply(':green_circle: Wrapar é colocar o código num formato e cores da linguagem que você escreveu.\nDessa forma \n"js\n Seu código aqui" \nResultado->\n ```js\nfunction Exemplo(){\nwindow.alert("onde está js coloque a linguagem que você quer, e na linha de baixo o teu código!")}```')
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
