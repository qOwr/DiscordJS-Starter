module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        if (!interaction.isCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            command.execute(interaction);
        }
        catch (error) {
            console.error(`interactionCreate error\n${interaction.commandName}\n${error}`);
        }
    },
};
