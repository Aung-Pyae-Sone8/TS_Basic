// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// arrays
var ninjas = [];
ninjas.push('shaun');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = '';
// ninjaOne = [] (accept because array is object)
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black',
    // skills : []
};
// 1. npm install -g typescript 
// 2. tsc file.ts file.js (or if file names are the same) tsc file.ts
// 3. tsc file.ts -w
