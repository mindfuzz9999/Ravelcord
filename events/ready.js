const { Events } = require('discord.js');
const ApiLogin = require('../ravelry/apiLogin.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        try {
            ApiLogin.ravLogin();
        } catch (error) {
            console.error('Ravelry login failed: ' + error);
        }
	},
};