const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Prints a list of useful bot-related resources to chat.'),
	
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setTitle('Help')
        .setDescription('N/A');

        return interaction.reply({ embeds: [embed] });
    },
};
