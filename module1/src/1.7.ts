// spread operator
// rest operator

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// rest operator
function greetingFriends(...friends: string[]) {
    // return numbers.reduce((acc, curr) => acc + curr, 0);
    friends.forEach((friend: string) => console.log(friend));
}