import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./HtmlGreeter";
import { ChalkGreeter } from "./ChalkGreeter";
import { ChalkGreeterKatie } from "./chalkGreeterKatie";

const greeter = new Greeter("Hello");
const javaScriptGreeter = new JavaScriptGreeter("Hi");
const loudGreeter = new LoudGreeter("Hola");
const htmlGreeter = new HtmlGreeter("Ciao");

console.log(greeter.greet("David"));
console.log(javaScriptGreeter.greet("Katie"));
console.log(loudGreeter.greet("Mike"));
console.log(htmlGreeter.greet("Dylan"));
console.log(ChalkGreeter.greet);

const myRedGreeting = new ChalkGreeterKatie("Welcome home", "red");
const myBlueGreeting = new ChalkGreeterKatie("Welcome home", "blue");
const myMagentaGreeting = new ChalkGreeterKatie("Welcome home", "magenta");
const myColorGreeting = new ChalkGreeterKatie("Welcome home", "");

myRedGreeting.chalkGreeting("Little Red Riding Hood");
myBlueGreeting.chalkGreeting("Amadeus");
myMagentaGreeting.chalkGreeting("Wolfgang");
myColorGreeting.chalkGreeting("Mozart");

const promptly = require("promptly"); // Move to top of file.

const getUserName = async () => {
  const name = await promptly.prompt("Name: ");
  return name;
};

// Async function need to wait for a return and then we can use their input
getUserName().then((userName) => {
  console.log(greeter.greet(userName));
  console.log(javaScriptGreeter.greet(userName));
  console.log(loudGreeter.greet(userName));
  console.log(htmlGreeter.greet(userName));
});
