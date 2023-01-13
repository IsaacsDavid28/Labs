import { Greeter } from "./Greeter";

class JavaScriptGreeter extends Greeter {
  greet(name:string) : string{
    return `console.log('${this.greeting}, ${name}')`;
  }
}

const greeter = new JavaScriptGreeter('Hello');
const greeter2 = new JavaScriptGreeter('How the heck are ya');
const greeter3 = new JavaScriptGreeter('Wazzzzzzup');

// console.log(greeter.greet('Grant')); 
// console.log(greeter2.greet('Sarah')); 
// console.log(greeter3.greet('John'));

export {JavaScriptGreeter}