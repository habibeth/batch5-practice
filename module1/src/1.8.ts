// Destucturing Assignment



// Object Destructuring

const person = {
  id: 1,
  name: {
    first: "John",
    middle: "M",
    last: "Doe",
  },
  age: 25,
  contactNumber: "123-456-7890",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
};

const {
    name: { first: firstName, last: lastName },
    contactNumber,
    address: { street, city, state, zipCode },
} = person;


// Array Destructuring

let myFriends = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

const [, , c, , ...restFriends] = myFriends;

// Nested Destructuring
let {
  name: personName,
  address: { city: cityName },
} = { name: "Bob", address: { city: "New York" } };
console.log(personName); // Output: Bob
console.log(cityName); // Output: New York
console.log(personName); // Output: Bob
console.log(city); // Output: New York

// Default Values
let [x = 10, y = 20] = [5];
console.log(x); // Output: 5
console.log(y); // Output: 20

// Rest Operator
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4]

let { name: personName2, ...otherProps } = {
  name: "Charlie",
  age: 25,
  city: "Los Angeles",
};
console.log(personName2); // Output: Charlie
console.log(otherProps); // Output: { age: 25, city: "Los Angeles" }
