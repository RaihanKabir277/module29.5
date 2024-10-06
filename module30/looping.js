

const numbers = [1, 6, 8, 4];

for(const num of numbers){
    // console.log(num);
    // console.log(typeof(num));
}

const nobab = 'siraj ud doula';
for(const char of nobab){
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
};

for(const key in glass){
    const value = glass[key];
//     console.log(key, value);

}

// optional 

const keys = Object.keys(glass);

for(const key of keys){
    const value = glass[key];
    console.log(key, value);
}

