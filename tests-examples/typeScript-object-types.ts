// Interface specifies the properties and methods that an object must have, but does not provide any implementation details.

interface Person {
    name: string,
    age: number,
    greet(): void,
}


// We can use this interface to type-check and enforce the structure of person objects in our code

let alice: Person = {
    name: "Alice",
    age: 25,
    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }
}

// We can also use the interface to define the type of a function parameter or return value. 

function sayHello(person: Person): string {
    return "Hello, " + person.name + "! You are " + person.age + " years old"
}


console.log(sayHello(alice));

// We can also use interfaces to describe the shape of classes and their instances.

interface Car {
    model: string;
    year: number;
    start(): void;
    stop(): void;
}

class Car implements Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    start() {
        console.log("The car is starting");
    }

    stop() {
        console.log("The car is stopping");
    }
}

// We can also use interfaces to extend other interfaces using the extends keyword.

interface ElectricCar extends Car {
    battery: number;
    charge(): void;
}

class ElectricCar extends Car implements ElectricCar {
    battery: number;

    constructor(model: string, year: number, battery: number) {
        super(model, year);
        this.battery = battery;
    }

    charge() {
        console.log("The car is charging");
        this.battery = 100;
    }
}

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): string {
        return "area of the shape is " + this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }

}

let rect: Rectangle = new Rectangle(10, 20)

console.log(rect.area());
console.log(rect.perimeter());

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }
}

let square: Square = new Square(100)

console.log(square.area());

// We can also use classes to implement abstraction, which is the process of hiding the implementation details and exposing only the essential features. 
// This allows us to create a simple and consistent interface for the users of the class.
abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
} 