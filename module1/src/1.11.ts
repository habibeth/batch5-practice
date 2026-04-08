// Ternary Operators
let age: number = 18;
let isAdult: string = age >= 18 ? "Yes" : "No";
console.log(`Is the person an adult? ${isAdult}`);

let score: number = 85;
let grade: string = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(`The grade is: ${grade}`);

// Nullish Coalescing
let userInput: string | null = null;
let defaultValue: string = "Default Value";
let result: string = userInput ?? defaultValue;
console.log(`The result is: ${result}`);

// Optional Chaining
type User = {
    name: string;
    address: {
        city: string;
        country: string;
        postalCode?: string;
    };
};

const user: User = {
    name: "Alice",
    address: {
        city: "New York",
        country: "USA",
    }
};

console.log(`User's city: ${user.address?.city}`);
console.log(`User's postal code: ${user.address?.postalCode ?? "Postal code not available"}`);