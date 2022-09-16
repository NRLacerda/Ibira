const { SlashCommandBuilder, Routes } = require('discord.js'); // puxa o package de slashbuilder
const { REST } = require('@discordjs/rest'); // allow a gente a fazer REST 
const { clientId, guildId, token } = require('./config.json'); //puxa as info do disc/bot


// Declaração dos comandos e suas descrições
// Pelo amor de deus encontrar uma forma menos feia de fazer isso, talvez por import em Typescript
const commands = 
[
	new SlashCommandBuilder().setName('server').setDescription('Infos do server'),
    new SlashCommandBuilder().setName('ajuda').setDescription('Precisa de ajuda gafanhoto?'),
    new SlashCommandBuilder().setName('java').setDescription('Java  !Javascript'),
    new SlashCommandBuilder().setName('javascript').setDescription('Javascript ! Java'),
    new SlashCommandBuilder().setName('sql').setDescription('um banco... de dados?'),
    new SlashCommandBuilder().setName('htmlcss').setDescription('<h1>HTML/CSS</h1>'),
    new SlashCommandBuilder().setName('bot').setDescription('01100010 01101111 01110100'),
    new SlashCommandBuilder().setName('wrap').setDescription('Wrapando tudo!')
]

.map(command => command.toJSON());

// Seta conexão com a versão 10 de REST do disc, e da nosso TOKEN como ve
const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
    
// Rodar apenas pra add novas features
// node deploy-commands.js