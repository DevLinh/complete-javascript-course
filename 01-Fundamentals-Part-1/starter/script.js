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
// const calculateBMI = (mass, height) => mass / (height**2);
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// const markBMI = calculateBMI(markMass, markHeight);
// const johnBMI = calculateBMI(johnMass, johnHeight)
// let markHigherBMI =  markBMI > johnBMI;
// console.log(markHigherBMI);

///////////////////////////
// Strings and Template Literals
// const firstName = "Linh";
// const job = 'dev';
// const birthYear = 1999;
// const introduction = 'My name is ' + firstName + " and I'm a " + (2021 - birthYear) + ' years old ' + job;
// console.log(introduction);
// const newIntroduction = `I'm ${firstName}, a ${2021 - birthYear} years old ${job}.\nHello all!`;
// console.log(newIntroduction);

///////////////////////////
//If/Else condition

// const yourAge = 29;
// const legalAge = 18;
// const isOldEnough = yourAge >= legalAge;
// if (isOldEnough) {
//     console.log('You can start driving license');
// } else {
//     console.log('You can not start driving license');
// }


///////////////////////////
// Coding Challenge #2

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI} is higher than John's (${johnBMI}))`);
// } else {
//     console.log(`Mark's BMI (${markBMI} is lower than John's (${johnBMI}))`);
// }

///////////////////////////
// Type Convention and Coercion
// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); //617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

///////////////////////////
//Truthy and Falsy values
// 5 Falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

///////////////////////////
// Equality Operators: == vs. ===
// const age = 18;
// if (age === "18") {
//     console.log('Strict Equal');
// }

// if (age == 18) {
//     console.log('Double Equal');
// }

// const favoriteNum = prompt('What is your favorite number > ');
// console.log(typeof favoriteNum);

// if (favoriteNum == 22) {
//     console.log('Nice');
// }

///////////////////////////
//Boolean Logic
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

///////////////////////////
//Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/


////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}