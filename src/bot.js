require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { exec } = require('child_process');
const keepAlive = require('../keep_alive/keepAlive.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', c => {
    console.log(`${c.user.username} is online.`)
})

client.on('messageCreate', (message) => {
    if (message.author.bot){
        return;
    }
});

function runPythonScript(scriptPath, interaction) {
    exec(`python ${scriptPath}`, (error, stdout) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
            interaction.reply(`Bruh 💀`);
            return;
        }
        interaction.reply(stdout);
    });
}

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }
    if (interaction.commandName === 'hsrcodes') {
        runPythonScript(`python-scripts/hsrCodes.py`, interaction);
    } else if (interaction.commandName === 'hc') {
        runPythonScript(`python-scripts/hsrCodes.py`, interaction);
    } else if (interaction.commandName === 'genshincodes') {
        runPythonScript(`python-scripts/genshinCodes.py`, interaction);
    }  else if (interaction.commandName === 'gc') {
        runPythonScript(`python-scripts/genshinCodes.py`, interaction);
    }
});

keepAlive();
client.login(process.env.BotToken);
