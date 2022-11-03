const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Replies with user info!"),
    async execute(interaction) {
        await interaction.reply(`This command was used by ${interaction.user.tag}, who is ${interaction.user.id} and joined on ${interaction.member.joinedAt}`);
    },
};
