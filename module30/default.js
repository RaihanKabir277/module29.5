
function add(num1=0, num2=0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const sum = add(7);
// console.log(sum);

function fullName(first, last = ''){
    const full = first + ' ' +last;
    return full;
}

function friends(numbs = []){

}

function person(human = {}){
    // empty object 
}