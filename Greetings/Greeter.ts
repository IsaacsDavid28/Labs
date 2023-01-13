class Greeter {
    greeting:string;

    constructor(greeting:string) {
        this.greeting = greeting;
    }

    greet(name:string) : string {
            return this.greeting + " " + name + "!"
    }
}

const greeter = new Greeter('Hello');
const greeter2 = new Greeter('How the heck are ya,');
const greeter3 = new Greeter('Howdy');

// console.log(greeter.greet('Grant'));
// console.log(greeter2.greet('Sarah'));
// console.log(greeter3.greet('John'));

export {Greeter}