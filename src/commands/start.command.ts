import { bot } from "../index.js";
import { Command } from "./command.class.js";

class StartCommand extends Command {
    constructor() {
        super();
        this.accessLevel = 2;

    }

    protected init() {
        bot.onText(/^(?:передать)/i, (msg, match)=> {
            console.log(msg);
            bot.sendMessage(msg.chat.id, "test")
            
        });
    }
}

export {StartCommand}