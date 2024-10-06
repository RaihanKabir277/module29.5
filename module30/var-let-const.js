
// var: no reason to use anymore
// let : allow it to re assign
// const : do not allow it to re assign

const money = 25;
// money = 50 is not possible cause of const
const rich = money + 25; 
// it is posssible 

let count = 0;
count = count + 10;

// const count = 0;
// count = count + 10;  it is not possible 

const numbers = [23, 4 , 5, 6,7 , 7];
// numbers = [4, 5, 7, 7]; is not allowed

numbers[1] = 55;
numbers.push(8,9,65);
// its allowed in const

const student = {
    name : 'moyna',
    class: 12
}
student.name='akiz';
// its allowed 

