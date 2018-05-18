const Discord = require('discord.js');
const {token, prefix, connectionString} = require("../config.js");
const commands = require("./commands");
const mongoose = require('mongoose');
const seed = require("./util/seed");

mongoose.connect(connectionString);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //seed();
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
            if(commands[defCommand].aliases.has(command)){
                commands[defCommand].run(msg, args);
                return;
            }
        }
        console.log(`The command ${command} was not found in the list of my commands`);
    }
});

client.login(token);