

const diff = (x, y) => x - y;

const mul = (first, second, third) => first * second * third;

const student = {
    name: 'ananta',
    age: 45
}
const getAge = (person) => person.age

const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];

const third = getThird([5, 9, 88, 2, 13]);
console.log(third);

const doubleIt = num => num * 2;

// no parameter ..........

const getPi = () => Math.PI ;
console.log(getPi());

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}

