import { Greeter } from "./Greeter";

class LoudGreeter extends Greeter {
    private extra: string = "!!";
    constructor(greeting: string) {
        super(greeting);
    };
    addVolume(): void {
        this.extra += "!";
    };
    greet(name: string): string {
        const message = super.greet(name);
        return `${message}${this.extra}`;
    };
};

export { LoudGreeter };