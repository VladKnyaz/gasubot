class Command {
    accessLevel: number;
    constructor() {
        this.accessLevel = 1;
        this.init();
    }

    protected init() {

    }
}

export {Command};