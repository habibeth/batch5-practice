{
    // OOP inheritance in TypeScript class
    class Person {
        constructor(public name: string, public age: number) {}

        greet(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    class Student extends Person {
        constructor( name: string, age: number, private grade: string) {
            super(name, age);
        }

        study(){
            console.log(`${this.name} is studying in grade ${this.grade}.`);
        }
    }

    // Create an instance of Student
    const student1 = new Student("Bob", 20, "A"); 
    console.log(student1); // Output: Student { name: 'Bob', age: 20, grade: 'A' }
    student1.greet(); // Output: Hello, my name is Bob and I am 20 years old.
    student1.study(); // Output: Bob is studying in grade A.
}