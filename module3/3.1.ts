{
    // OOP in TypeScript class
    class Person {
        // private name: string;
        // private age: number;


        // Parameter properties in constructor

        constructor(private name: string, private age: number) {
            // this.name = name;
            // this.age = age;
        }

        greet(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    const person1 = new Person("Alice", 30);
    console.log(person1); // Output: Person { name: 'Alice', age: 30 }
    person1.greet(); // Output: Hello, my name is Alice and I am 30 years old. 

}