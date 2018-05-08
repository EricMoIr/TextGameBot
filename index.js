/* @flow */

const Discord = require('discord.js');
const {token, prefix} = require("./config.json");
const commands = require("./commands");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) {
        return;
    }
    const input = msg.content.substring(prefix.length).split(" ");
    const command = input[0];
    const args = input.slice(1);
    if(command in commands){
        commands[command].run(msg, args);
    }
    else{
        for(const defCommand in commands){
            if(command in commands[defCommand].aliases){
                commands[command].run(msg, args);
                return;
            }
        }
        console.log(`The command ${command} was not found in the list of my commands`);
    }
});

client.login(token);