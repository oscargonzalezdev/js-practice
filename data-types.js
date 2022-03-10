// ** JavaScript Exercises **

// Module: Primitive Data Types

// Numbers

let cheeseCalories = 200;
let eggsRequired = 4;
let caloriesPerEgg = 75;
let eggsCalories = eggsRequired * caloriesPerEgg;
console.log(eggsCalories);

let omeletteDuFromageCalories = cheeseCalories + eggsCalories;
console.log(omeletteDuFromageCalories);
console.log (omeletteDuFromageCalories / 2);

const i = 10 + (5 * 2 ** 3) / 4 - 6;
console.log(i);

let myAge = 34;
myAge += 1;
console.log(myAge);

// Strings

let language = "JavaScript";
console.log(`I'm learning ${language}!`);

const campuses = `
- Madrid
- Barcelona
- Miami
- Mexico City
- Paris
- Berlin
- Sao Paulo
- Lisbon`;

console.log(`Multiline string and interpolation 😉: ${campuses}`); 

let myName = "Oscar";
myName += " is my name";

console.log(`Hello there! ${myName}. Nice to meet you.`);

const fact ="I love cooding";
console.log(`"${fact}" is a string and it is length is ${fact.length}.`);
console.log(`The last caracter of the string is: ${fact.toUpperCase()[fact.length - 1]}.`);
let mySliceEnd = fact.indexOf("e") + 1;
console.log(`I also ${fact.slice(2,mySliceEnd)} biking.`);

let turtle1 = "Leonardo";
let turtle2 = "Raphael";
let turtle3 = "Donatelo";
let turtle4 = "Michelangelo";

let allTurtles = "";
allTurtles += turtle1 + " " + turtle2 + " " + turtle3 + " and " + turtle4 + ".";

console.log(`Here are all the turtles: ${allTurtles}`);

// Booleans

console.log(true && false); // false 
console.log(11%3);
console.log(11 % 3 === 2); // true
console.log(false || true); // true
console.log(!true || false); // false
console.log(17 == '17'); // true
console.log(123 === '123'); // false
console.log(123 === 123) // true
console.log(123 !== 123) // false