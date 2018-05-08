/* @flow */
import type Message from "discord.js";
type Command = {
    run: (msg: Message, args: Array<string>) => Promise<void>,
    aliases: Array<string>,
    description: string
}
type Commands = {
    ping: Command
}

const commands:Commands = {
    ping: {
        run: async (message, args) => {
            await message.channel.send("pong");
        },
        aliases: ["p"],
        description: "Responds with pong"
    }
};

module.exports = commands;