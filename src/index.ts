import TelegramBot from "node-telegram-bot-api";
import { StartCommand } from "./commands/start.command.js";

const bot = new TelegramBot("6926091418:AAEdlpdA-Ak079wptEqaU653qQRz-YwRtJ0");
 
    // /^(?:передать)\s([0-9]+)\s(.*)$/i

class App {
    constructor() {
        this.initModules()
        this.initCommands()
    }
    public initModules() {

    }
    
    public initCommands() {
        new StartCommand();

    }

}

export {bot};

export default new App();