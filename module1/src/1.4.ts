// Basic Data Types

// string
let myName: string = "John Doe";

// number
let myAge: number = 30;

// boolean
let isStudent: boolean = true;

// undefined
let myUndefined: undefined = undefined;

// null
let myNull: null = null;

// array
let myFriends: string[] = ["Alice", "Bob", "Charlie"];
let eligibleRollList: number[] = [101, 102, 103];

// tuple
let person: [string, number] = ["John Doe", 30];
let coordinates: [number, number] = [40.7128, -74.0060];

// enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;

// any
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

// void
function greet(): void {
    console.log("Hello, World!");
}