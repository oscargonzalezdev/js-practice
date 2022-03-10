// ** JavaScript Exercises **

// Module: Conditional and Loops

// if statements

let person = {
    name : "",
    gender : "",
    age : "34",
}

if (person.age >= "18")
{   console.log("You have acces");
 if (person.name && person.gender === "male") {
    console.log(`Bienvenido ${person.name} !`);
} if (person.name.length > 1 && person.gender !== "male") {
    console.log(`Bienvenid@ ${person.name}`)
} if (!person.name || !person.gender) {
    console.log ("Your personal infomation is incomplete.")
}
} else { console.log("Sorry! Yo dont have acces.")} 

// Switch statements

let selectCountry = "Spain";
switch (selectCountry) {
    case "Germany":
        console.log("You speak German.");
        break;
    case "Spain":
        console.log("You speak Spanish.");
        break;
    case "United Kingdom":
        console.log("You speak English.");
        break;
    default:
        console.log("We don't know which is your language.");
}

// Rock, paper, scissors game

let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';
 
// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;
 
let firstPossibility;
let secondPossibility;
let thirdPossibility;
 
let fourthPossibility;
let fifthPossibility;
let sixthPossibility;
 
let seventhPossibility;
 
// 3. store the first scenario in the firstPossibility variable
firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
 
// 4. do the same for the other five possibilities with a winner
secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
 
// 5 store the value of a player tie, meaning the choices are the same
seventhPossibility = firstPlayerChoice === secondPlayerChoice;
 
// 6, 7, 8. The conditional with the four possible outcomes!
if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log(`first player won!`);
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log(`second player won!`);
} else if (seventhPossibility) {
  console.log('there is a tie! pick again');
} else {
  console.log('something went wrong!');
}

// Loops
// While loops
let counter = 1;
let counter2 = 30;

while (counter <= 10) {
    console.log(counter);
    counter += 1;
}
while (counter2 >= 0) {
    console.log(counter2);
    counter2 -= 1;
}

// For loops

for (let i = 10; i >= 0; i--) {
    console.log(i);
   
    if (i === 0) {
      console.log('Boom!');
    }
  }

for (let i = ""; i.length <= 10; i += "*"){
    console.log(i);
}

let myName = "My name is Oscar";
let caracter = "";

for (i = 0; i < myName.length; i++){

    caracter = myName[i];

    if (caracter !== " "){

switch (caracter) {
    case "O":
    case "o":
        console.log("0");
        break;
    case "S":
    case "s":
        console.log("5");
        break;
    case "C":
    case "c":
        console.log("©");
        break;
    case "A":
    case "a":
        console.log("4");
        break;
    case "R":
    case "r":
        console.log ("#");
        break;
    default:
        console.log(caracter);
    }
} else {console.log("-")}
};