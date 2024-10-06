const first = 'jaan';
const last = 'pakhi';
const greet = 'potas potas'

const name = first + ' '+last + " "+ greet;
console.log(name);

const a = 10;
const b=20;
// const result = 'the sum of '+ a + ' And '+ b + ' is ' + (a+b); bad practise
// console.log(result);

const math = `The sum of ${a} and ${b} is ${a+b}`;   
// good practise
console.log(math);

// const email = 'hi john \n' + 'cena cena lage';
// console.log(email); bad practise

const challenge = `john cena
cena naki ochena
mair dibo pochur`;
console.log(challenge);

// good practise ...

const numbers = [45, 48, 98, 78];
const students = {name: 'john', age: 5};
const math1 = `The sum of ${numbers[0]} and ${students.age} is ${numbers[0] + students.age}`;   

console.log(math1);