import { Greeter } from './Greeter';
import { JavaScriptGreeter } from './JavaScriptGreeter';
import { LoudGreeter } from './LoudGreeter';
import { HtmlGreeter } from './HtmlGreeter';
import { ChalkGreeter } from './ChalkGreeter';

const greeter = new Greeter("Hello");
const javaScriptGreeter = new JavaScriptGreeter("Hi");
const loudGreeter = new LoudGreeter("Hola");
const htmlGreeter = new HtmlGreeter("Ciao");

console.log(greeter.greet("David"));
console.log(javaScriptGreeter.greet("Katie"));
console.log(loudGreeter.greet("Mike"));
console.log(htmlGreeter.greet("Dylan"));
console.log(ChalkGreeter.greet)

const promptly = require('promptly');
 
(async () => {
    const name = await promptly.prompt('Name: ');
    console.log(name);
})();