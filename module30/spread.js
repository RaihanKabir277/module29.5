

const max = Math.max(6, 23, 45, 1, 89, 23);
console.log(max);


const numbers = [3, 5, 2, 45, 5, 43,90, 32, 15 ]

// const arrayMax = Math.max(numbers);

// console.log(arrayMax);
// this process is not working here ......

console.log(...numbers);
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// use spread operator for copy

const friends = [4, 5, 87, 9];
const bondho = [...friends];

const dosto =[...friends];
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

// advanced --------

const sonkha = [...friends, 9999];
console.log(sonkha);
console.log(bondho);

