import { Greeter } from "./Greeter";

class HtmlGreeter extends Greeter {
    tagName: string;
    constructor(greeting: string, tagName: string = "h1") {
        super(greeting);
        this.tagName = tagName
    };
    greet(name: string): string {
        const message = super.greet(name);
        return `<${this.tagName}>${message}</${this.tagName}>`;
    };
};

export { HtmlGreeter };