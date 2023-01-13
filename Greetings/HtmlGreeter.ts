import { Greeter } from "./Greeter"


class HtmlGreeter extends Greeter {
    tagName: string;

    constructor(greeting:string, tagName="h1") {
        super(greeting)
        //this.tagName = "h2"
        this.tagName = tagName
    }

    greet(name: string): string {
    return `<${this.tagName}>${this.greeting}, ${name}!<${this.tagName}>`;
  }
}

const greeter = new HtmlGreeter('Hello');

console.log(greeter.greet('Grant'))
console.log(greeter.greet('Sarah'))
console.log(greeter.greet('John'))