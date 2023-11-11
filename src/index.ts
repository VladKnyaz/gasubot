import TelegramBot from "node-telegram-bot-api";
import { database } from "./modules/database.js";
import { StartCommand } from "./commands/start.command.js";

const bot = new TelegramBot("6926091418:AAEdlpdA-Ak079wptEqaU653qQRz-YwRtJ0");


class App {
    public initModules() {

    }
    
    public initCommands() {
        new StartCommand();

    }

}

export {bot};

export default new App();