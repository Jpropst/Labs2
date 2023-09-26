import chalk, { Chalk } from "chalk";
import { Greeter } from "./Greeter";

export class ChalkGreeterKatie extends Greeter {
  textColor: string;
  constructor(greeting: string, textColor: string) {
    super(greeting);

    // added .toLowerCase just to clean up user input for my switch statement
    this.textColor = textColor.toLowerCase();
  }

  chalkGreeting(name: string): void {
    switch (this.textColor) {
      case "blue":
        console.log(chalk.blue(super.greet(name)));
        break;
      case "red":
        console.log(chalk.red(super.greet(name)));
        break;
      case "magenta":
        console.log(chalk.magenta(super.greet(name)));
        break;
      default:
        console.log(chalk.cyanBright(super.greet(name)));
    }
  }
}
