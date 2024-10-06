

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
};

const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

// 2d array ....................
const pair = Object.entries(glass)
console.log(pair);

// delete property ...

delete glass.isClean;
console.log(glass);

const {isClean, ...shortGlass} = glass;
console.log(shortGlass);

// freeze .....
// Object.freeze(glass);
// glass.source = 'bangladesh';
// glass.price = 5000;
// delete glass.name;
// // console.log(glass);


// seal .....
Object.seal(glass);
glass.source = 'bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);


