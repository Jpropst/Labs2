class Greeter {
    static greet(arg0: string): any {
        throw new Error('Method not implemented.');
    }
    greeting: string;
    constructor(greeting: string) {
        this.greeting = greeting;
    };
    greet(name: string): string {
        return `${this.greeting}, ${name}!`;
    };
};

export { Greeter };