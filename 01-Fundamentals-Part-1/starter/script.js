// let js = 'amazing';
// if (js === 'amazing') alert('JS is Fun!');
// console.log(40 + 9 - 10 + 3);

///////////////////////////
// Variable name conventions
// let firstName = "Linh";
// console.log(firstName);

// let age = 23;
// console.log(`Age: ${age}`);

// let PI = 3.1415;

// console.log("PI = " + PI);

///////////////////////////
//Date Types
// let isIsland = false;
// let population = 90000000;
// let country = 'Vietnam';
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

///////////////////////////
//let, const, var
// let age = 22;
// age = 23;

// const birthYear = 1999;
// birthYear = 2000; // not legal

// const job; //not legal

// var job = 'dev';
// job = 'teacher';

// console.log(age);
// console.log(birthYear);
// console.log(job);


///////////////////////////
//Basic Operators
// Math operators
// const now = 2021;
// const myAge = now - 1999;
// console.log(myAge);

// const myBrotherAge = now - 2004;
// console.log(myBrotherAge);

// console.log(myAge*2, myAge/5, 2 ** 3);
// const firstName = 'Linh';
// const lastName = 'Vo Van';
// console.log(firstName + ' ' +lastName);

// // Assignment operators
// let x = 10 + 5;
// x+=22;
// x-=10;
// x*=4;
// x++;
// x--;
// console.log(x);

// // Comparison operators
// console.log(myAge + 4 > 25);
// console.log(myBrotherAge >= myAge);

// const isFullAge = myAge >= 18;
// console.log(isFullAge);

///////////////////////////
// Operator Precedence
// console.log(now - 2004 > now - 1999);

///////////////////////////
// Coding Challenge #1
const calculateBMI = (mass, height) => mass / (height**2);
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
let markHigherBMI = calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight);
console.log(markHigherBMI);

