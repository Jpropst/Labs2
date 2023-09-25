import { Greeter } from './Greeter';

class JavaScriptGreeter extends Greeter {
    constructor(greeting: string) {
        super(greeting);
    };
// used same method as parent class since ther are no additional methods added
// created a new variable 'message' containing the parent greeter class
// called the greeter method w/ '.' and 'greet' with the name property for a parameter (just like parent class)
// now I only have to return my message variable in console.log
greet(name: string) {
        const message = super.greet(name);
        return `console.log('${message}')`;
    };
};

export { JavaScriptGreeter };