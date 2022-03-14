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

// Exercise 12
// Define a function that loop through the following array and print the type of each element of the array in the console.

const mixedArray = [123, 'abc', true, { a: 1 }, ['js', 'node', 'react'], undefined];

function printTypeOf (arr){
    arr.forEach(element => {
        console.log(`${element} is of type: ${typeof element}.`);
    });
}

printTypeOf(mixedArray);

// Exercise 13
// Define a function getCredentials() that will receive the following object as argument and print the following result:
// Username is: ironhacker and the password is: 123iron345.

let user = {
    username: 'ironhacker',
    password: '123iron345'
  };

  function getCredentials(object){
      console.log(`Username is: ${object.username} and the password is: ${object.password}.`);
  }

  getCredentials(user);

  */

  // Exercise 14

  let property = {
    owner: {
      firstName: 'John',
      lastName: 'Doe',
      age: 44
    },
    isForSale: false,
    sqrm: 120,
    address: {
      street: 'Happy St',
      number: 123,
      city: 'Miami',
      state: 'FL',
      country: 'US'
    },
    amenities: ['pool', 'tennis court', 'private parking', 'yard']
  };
  
function checkProperty(object){
    switch (true) {
        case object.isForSale === true:
            console.log(`The owner, ${object.owner.firstName} ${object.owner.lastName} put the home for sale! The property has ${object.amenities.length} amenities.`);    
            break;
        default:
            console.log(`The home in ${object.address.street} no. ${object.address.number} is not for sale.`)
            break;
    }
}
  checkProperty(property);