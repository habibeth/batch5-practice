{
// Generic Types in TypeScript
type genericArray<T> = T[];
const rollNumbers: genericArray<number> = [1, 2, 3, 4, 5]; // Using Array<T> syntax for an array of numbers

const stringArray: genericArray<string> = ["Hello", "TypeScript", "Generics"]; // Using Array<T> syntax for an array of strings

const boolArray: genericArray<boolean> = [true, false, true]; // Using Array<T> syntax for an array of booleans

const add = (a: number, b: number): number => a + b; // A simple function to add two numbers

const result = add(5, 10); // Using the add function to add two numbers 

//type aliases and interfaces in TypeScript
type User = {
    name: string;
    age: number;
}

interface User1 {
    name: string;
    age: number;
}



// Using the generic array type to create an array of objects
const user: genericArray<User1> = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
]

//generic tuples in TypeScript
type genericTuple<X, Y> = [X, Y];

const userInfo: genericTuple<string, number> = ["Alice", 30]; // Using the generic tuple type to create a tuple of a string and a number
const UserWithID: genericTuple<number, User> = [12345, { name: "Bob", age: 25 }]; // Using the generic tuple type to create a tuple of an object and a number

}