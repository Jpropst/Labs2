import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
    it("creates a greeting with 'Hello' and 'Josh'", () => {
        const greeter = new Greeter("Hello");
        expect(greeter.greet("Josh")).toBe("Hello, Josh!");
    });
    it("creates a greeting with 'Hey' and 'Mac'", () => {
        const greeter = new Greeter("Hey");
        expect(greeter.greet("Mac")).toBe("Hey, Mac!");
    });
});