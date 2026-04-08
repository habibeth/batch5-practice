// Type Aliases
type Student = {
    name: string;
    age: number;
    grade: string;
    gender: string;
    contact: string;
    address: string;
};

const student1: Student = {
    name: "Alice",
    age: 20,
    grade: "A",
    gender: "Female",
    contact: "123-456-7890",
    address: "123 Main St, New York, NY 10001"
}

const student2: Student  = {
    name: "Bob",
    age: 22,
    grade: "B",
    gender: "Male",
    contact: "987-654-3210",
    address: "456 Elm St, Los Angeles, CA 90001"
} 

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => {
    return num1 + num2;
}

console.log(add(5, 10)); // Output: 15