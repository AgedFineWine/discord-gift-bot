require('dotenv').config({ path: __dirname + '/../.env' });
const { REST, Routes } = require("discord.js");
const clientId = process.env.Client_ID;
const botToken = process.env.BotToken;
const guildIdee = process.env.Guild_ID_ee;

const commands = [
    {
        name: "hsrcodes",
        description: "Replies with the latest Honkai Star Rail codes"
    },
    {
        name: "hc",
        description: "Replies with the latest Honkai Star Rail codes"
    },
    {
        name: "genshincodes",
        description: "Replies with the latest Genshin Impact codes"
    },
    {
        name: "gc",
        description: "Replies with the latest Genshin Impact codes"
    }
];

const rest = new REST({version: "10"}).setToken(botToken);

const registerCommands = async () => {
    try {
        console.log("Registering slash commands...");
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildIdee),
            {body: commands}
        );
        console.log("Successfully registered slash commands!");
    } catch (error) {
        console.error(`An error occured while registering slash commands!\n ${error}`);
    }
};

registerCommands();