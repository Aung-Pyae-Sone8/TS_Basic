let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = {name: 'luigi'};
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja : { 
    name: any, 
    age: any 
};

ninja = {
    name : 'yoshi',
    age : 25
}

console.log(ninja);


// 1. npm install -g typescript 
// 2. tsc file.ts file.js (or if file names are the same) tsc file.ts
// 3. tsc file.ts -w