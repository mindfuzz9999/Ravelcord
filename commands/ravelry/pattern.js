require('../../ravelry/ravelryApi.js');
const apiFetch = require('../../ravelry/apiFetch.js');
const { SlashCommandBuilder } = require('discord.js');
const api = require('../../ravelry/apiLogin.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pattern')
		.setDescription('Search Ravelry for a pattern.')
        .addStringOption(option =>
            option
                .setName('query')
                .setDescription('The pattern to search for.')
        ),
	async execute(interaction) {
        const query = interaction.options.getString('query');
        const url = api.searchPatterns(query);
        const json = apiFetch.getData(url);

        console.log(json);
		// await interaction.reply(json);
	},
};