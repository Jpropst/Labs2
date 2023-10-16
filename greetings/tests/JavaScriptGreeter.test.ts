import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("javaScriptGreeter", () => {
    it("will console.log 'Hey, Josh!'", () => {
        const jsGreeter = new JavaScriptGreeter("Hey");
        const greeting = jsGreeter.greet("Josh");
        expect(greeting).toBe("console.log('Hey, Josh!')");
    });
    it("will console.log 'shalom' and 'Mac'", () => {
        const jsGreeter = new JavaScriptGreeter("Shalom");
        const greeting = jsGreeter.greet("Mac");
        expect(greeting).toBe("console.log('Shalom, Mac!')");
    });
});