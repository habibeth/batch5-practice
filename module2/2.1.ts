// Type Assertions in TypeScript

let anything: any;

anything = "Hello, TypeScript!";

(anything as string).length; // Using type assertion to treat 'anything' as a string


const kgtoGm = (weight: number | string): number | string | undefined => {
    if (typeof weight === "number") {
        return weight * 1000;
    } else {
        const parsedWeight = parseFloat(weight);
        if (isNaN(parsedWeight)) {
            throw new Error("Invalid weight format");
        }
        return `The weight is ${parsedWeight * 1000} grams`; // Convert kg to gm
    }
}

const result1 = kgtoGm(2) as number; // Returns 2000
const result2 = kgtoGm("3.5"); // Returns "The weight is 3500 grams"


type customsError = {
    message: string;
    status: number;
}

try {
    
} catch (error) {
    console.log((error as customsError).message);
}


// Arrays in TypeScript type aliases and interfaces

type Roll1 = number [];

const rollNumbers1: Roll1 = [1, 2, 3, 4, 5];

interface Roll2 {
    [index: number]: number;
}

const rollNumbers2: Roll2 = [1, 2, 3, 4, 5];

// functions in TypeScript type aliases and interfaces

type addFunc1 = (num1: number, num2: number) => number;

const addNumbers1: addFunc1 = (num1, num2) => num1 + num2;

interface addFunc2 {
    (num1: number, num2: number): number;
}

const addNumbers2: addFunc2 = (num1, num2) => num1 + num2;
