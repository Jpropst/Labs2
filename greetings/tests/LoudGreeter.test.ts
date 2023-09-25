import { LoudGreeter } from "../src/LoudGreeter";

describe("loudGreeter", () => {
    it("greets louder than the other greetings", () => {
        const greetLoud = new LoudGreeter("Aloha");
        expect(greetLoud.greet("Brendan")).toBe("Aloha, Brendan!!!");
    });
    it("greets louder after adding volume", () => {
        const greetLoud = new LoudGreeter("Ciao");
        greetLoud.addVolume();
        expect(greetLoud.greet("Karina")).toBe("Ciao, Karina!!!!");
    });
    it("greets louder after adding more volume", () => {
        const greetLoud = new LoudGreeter("Yeyyo");
        greetLoud.addVolume();
        greetLoud.addVolume();
        expect(greetLoud.greet("Dani")).toBe("Yeyyo, Dani!!!!!");
    });
});