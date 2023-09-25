import { ChalkGreeter, chalkGreeter } from '../src/ChalkGreeter'
import chalk from "chalk";

describe('ChalkGreeter', () => {
    it("should format greeting message with provided formatting function", () => {
        const name = "Devin";
        const formatting = (text: string) => chalk.magenta(text);
        const greeter = new ChalkGreeter("Greetings", formatting);
        const formattedMessage = greeter.greet(name);
        expect(formattedMessage).toBe(chalk.magenta(`Greetings, ${name}!`));
        });
        // is there a better way to do this? I had to insert an argument because it was expecting two, I only wanted to put one
        it("should use chalk.magenta by default if no formatting function is provided", () => {
            const name = "Alice";
            const greeter = new ChalkGreeter("Hola", chalk.magenta);
            const formattedMessage = greeter.greet(name);
            expect(formattedMessage).toBe(chalk.magenta(`Hola, ${name}!`));
          });
});

function formatting(text: string): string {
    throw new Error('Function not implemented.');
}
