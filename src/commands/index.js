/*type Command = {
    run: (msg: Message, args: Array<string>) => Promise<void>,
    aliases: Set<string>,
    description: string
};*/
const { goToInnerCity, getInnerCityCommands } = require("../services/userService");

const commands = {
    ping: {
        run: async (message, args) => {
            await message.channel.send("pong");
        },
        aliases: new Set(["p"]),
        description: "Responds with pong"
    },
    
    innercity: {
        run: async (message, args) => {
            try{
                await goToInnerCity(message.author.id);
                await message.channel.send("You are in the Inner City. The smell of decaying flesh fills your nostrils reminding this no longer is a city for the living. Caution is most advised. Now, what will you do?");
                const commandsAvailable = await getInnerCityCommands();
                if(commandsAvailable.length == 0){
                    await message.channel.send("No actions are available here");
                }
                else{
                    await message.channel.send("- "+commandsAvailable.join("\n- "));
                }
            }
            catch(err){
                console.log(err);
                await message.channel.send("There was an error going to the IC");
            }
        },
        aliases: new Set(["ic"]),
        description: "Leave the outpost and enter the Inner City"
    },

    return: {
        run: async (message, args) => {
            try{
                await goToOutpost(message.author.id);
            }
            catch(err){
                console.log(err);
                await message.channel.send("There was an error going back to the outpost");
            }
        },
        aliases: new Set(["r"]),
        description: "Responds with pong"
    },
}

module.exports = commands;