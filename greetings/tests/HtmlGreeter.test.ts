import { HtmlGreeter } from "../src/HtmlGreeter"

describe("HtmlGreeter", () => {
    it("greets w/ proper greeting, name, and is wrapped in h1 tag", () => {
        const greetHTML = new HtmlGreeter("Bonjour");
        expect(greetHTML.greet("Brian")).toBe("<h1>Bonjour, Brian!</h1>");
    });
    it("greets w/ different greeting, name, and is wrapped in h1 tag", () => {
        const greetHTML = new HtmlGreeter("Konichiwa");
        expect(greetHTML.greet("Natalie")).toBe("<h1>Konichiwa, Natalie!</h1>");
    });
    it("uses an h2 tag instead of an h1 w/ proper greeting and name", () => {
        const greetHTML = new HtmlGreeter("Asalaam alaikum");
        greetHTML.tagName = "h2";
        expect(greetHTML.greet("Lisa")).toBe("<h2>Asalaam alaikum, Lisa!</h2>");
    });
    it("uses default h1 tag when tagName is not provided in constructor", () => {
        const greetHTML = new HtmlGreeter("Ola");
        expect(greetHTML.greet("Dylan")).toBe("<h1>Ola, Dylan!</h1>");
    });
});