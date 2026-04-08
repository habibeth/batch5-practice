// Nullable types / unknown types
const searchName = (value: string | null): string => {
    if (value === null) {
        return "No name provided";
    }
    return `Searching for ${value}`;
}

console.log(searchName("Alice")); // Output: Searching for Alice
console.log(searchName(null)); // Output: No name provided

// Unknown type
let userInput: unknown;

userInput = "Hello, World!";

if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // Output: HELLO, WORLD!
} else {
    console.log("User input is not a string");
}

//never type
function throwError(message: string): never {
    throw new Error(message);
}

try {
    throwError("This is an error message");
} catch (error) {
    console.error(error); // Output: Error: This is an error message
}