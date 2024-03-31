// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3);
// names[0] = 3;

let array = [];

let numbers: (number | string) [] = [10, 20, 30,40];

numbers.push(25);
numbers.push('shaun');
numbers[1] = 'shaun';

console.log(numbers[1]);

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;



//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];

ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['fighting', ]
}


// 1. npm install -g typescript 
// 2. tsc file.ts file.js (or if file names are the same) tsc file.ts
// 3. tsc file.ts -w