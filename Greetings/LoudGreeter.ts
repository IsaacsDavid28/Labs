import { Greeter } from "./Greeter";

class LoudGreeter extends Greeter {
    private extra:string = "!";

    constructor(greeting:string) {
        super(greeting)
        this.extra = "!"
    }
    addVolume(): void {
       this.extra += "!";
    }

       greet(name: string): string {
    return this.greeting + " " + name + this.extra;
  }
}

const greeter = new LoudGreeter('Hello');


console.log(greeter.greet('Grant'));
greeter.addVolume();
console.log(greeter.greet('Sarah'));
greeter.addVolume();
console.log(greeter.greet('John'));