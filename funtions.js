// ** JavaScript Exercises **

// Module: Funtions

// Exercise 1
/*

function sayHello (language){
    switch (language){
        case "fr":
            console.log ("Bonjour!");
            break;
        case "de":
            console.log ("Hallo Zusammen!");
            break;
        case "es":
            console.log ("Hola a todos!");
            break;
        default:
            console.log ("Hello World!");
    }
}
sayHello("de");

// Exercise 2

function multiplicationList(num, times) {
    for (i=1; i<(times + 1); i++){
        let result = num * i;
        console.log(`${num} * ${i} = ${result}`);
    }
}
multiplicationList(9,10);

// Exercise 3

function calculateSum(num1, num2) {
    return num1 + num2;
  }
   
  function printResult() {
    const result = calculateSum(3, 6);
    console.log(`The result is ${result}.`);
  }
   
  printResult();

// Excercise 4

function colorMix (color1, color2){
    if (color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red"){
       return "violet";
    } else if (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"){
        return "orange";
    } else if (color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue"){
        return "green";
    } else {
        return "We don't have this mix."
    }
}

let myColor = colorMix("green", "red");
console.log(`My Mix color is: ${myColor}`)

var variable = "top-level";
function parentFunction() {
  var variable = "local";
  function childFunction() {
    console.log(variable);
  }
  childFunction();
}
parentFunction(); 

// Exercise 5
// Define function welcome() that will receive one argument, your name, and greet you with your name.

function welcome(name){
    console.log(`Welcome ${name}!`);
}
welcome('Oscar');

// Exercise 6
// Define a function printToTwenty() that will print the numbers from 0 to 20 to the console.

function printToTwenty (){
    for (let i=0; i<=20; i++){
        console.log(i);
    }
}
printToTwenty();

// Exercise 7
// Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument.

function printNumbers(x){
    for (let i = 0; i <= x; i++){
        console.log(i);
    }
}
printNumbers('15');

// Exercise 8
// Define a function printArrElements(someArr) that will loop through array and print all the elements of that array.
// Use the following array to pass it as an argument to the function you have just defined:

let ironCities = ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Mexico City', 'Miami', 'Paris', 'Sao Paulo'];

function printArrElements(someArr){
    for (let i=0; i < someArr.length; i++){
        console.log(someArr[i]);
    }
}
printArrElements(ironCities);

// Exercise 9
// Define an array of your favorite cities and pass it as an argument to the previously defined function. Invoke a function.

let myCities = ['Freiburg', 'Zürich', 'Albacete'];
printArrElements(myCities);

// Define a function printEvens(someArr) and use the ironCities array and print only its even elements.
let ironCities = ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Mexico City', 'Miami', 'Paris', 'Sao Paulo'];
function printEvens(newArr){
    let evenElements = [];
    for (let i=0; i< newArr.length; i++){
        if (newArr.indexOf(newArr[i])%2 == 0){
            evenElements.push(newArr[i]);
        }
    }
    console.table(evenElements);
}
printEvens(ironCities);
*/

// Exercise 10
// Define a function that will receive an array as an argument and calculate a sum of all its elements.
// How would you concatenate $ sign in front of the sum?

const prices = [5, 7.99, 9.99, 0.99, 21];

function sumElements (someArr){
    let result = 0;
    for (let i=0; i<someArr.length; i++){
        result += someArr[i];
    }
    console.log(`$ ${result}`);
}
sumElements(prices);

// Exercise 11
// Define a function stringToLetters() that receives a string as an argument and returns an array of its letters.

function stringToLetters(myString){
    let arrLetters = [];
    for (let i=0; i<myString.length; i++){
        arrLetters.push(myString[i]);
    }
    console.table(arrLetters);
}
stringToLetters("Hello");