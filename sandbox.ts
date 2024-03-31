// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;


// arrays
let ninjas: string[] = [];

ninjas.push('shaun');



// union types
let mixed: ( string | number | boolean )[] = [];

mixed.push('hello');
mixed.push(20);
mixed.push(false);

console.log(mixed);

let uid: string | number;

uid = '123';
uid = 123;



// objects
let ninjaOne: object;

ninjaOne = { name : 'yoshi', age : 30 };
// ninjaOne = '';
// ninjaOne = [] (accept because array is object)

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = {
    name : 'mario',
    age : 20,
    beltColour : 'black',
    // skills : []
}







// 1. npm install -g typescript 
// 2. tsc file.ts file.js (or if file names are the same) tsc file.ts
// 3. tsc file.ts -w