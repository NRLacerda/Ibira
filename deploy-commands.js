const { SlashCommandBuilder, Routes } = require('discord.js'); // puxa o package de slashbuilder
const { REST } = require('@discordjs/rest'); // allow a gente a fazer REST 
const { clientId, guildId, token } = require('./config.json'); //puxa as info do disc/bot


// Declaração dos comandos e suas descrições
const commands = [
	new SlashCommandBuilder().setName('xama').setDescription('O Xamã Ibira foi invocado!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]

.map(command => command.toJSON());

// Seta conexão com a versão 10 de REST do disc, e da nosso TOKEN como ve
const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);