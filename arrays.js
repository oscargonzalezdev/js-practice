// ** JavaScript Exercises **

// Module: Arrays

//Exercise 1

let recipeCake = ["flour", "eggs", "milk", "butter", "sugar", "oil"];
recipeCake.forEach(function(ingredient){
    console.log(`Ingredient: ${ingredient}`)
});
console.log(`Total ingredients: ${recipeCake.length} --> ${recipeCake}`);
recipeCake.push("chocolate");
console.log(`+ ${recipeCake[6]} = ${recipeCake.length} ingredients. --> ${recipeCake}`);
let lastIngredient = recipeCake.pop();
console.log(`- ${lastIngredient} = ${recipeCake.length} ingredients. --> ${recipeCake}`);
recipeCake.unshift("strawberries");
console.log(`+ ${recipeCake[0]} = ${recipeCake.length} ingredients. --> ${recipeCake}`);
let firstIngredient = recipeCake.shift();
console.log(`- ${firstIngredient} = ${recipeCake.length} ingredients. --> ${recipeCake}`);
recipeCake.push(firstIngredient);
recipeCake.unshift(lastIngredient);
console.log(recipeCake);
console.table(recipeCake);

// Using splice

let recipeCake2 = ["flour", "eggs", "milk", "butter", "sugar", "oil"];
recipeCake2.splice(1, 1);
console.log(recipeCake2);
recipeCake2.splice(3, 1, "brown sugar");
console.log(recipeCake2);
recipeCake2.splice(2, 0, "vanille");
console.log(recipeCake2);

// Calculate the sum

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0;
for (let i = 0; i < prices.length; i++){
    sum += prices[i];
}
console.log(Math.round(sum)); 

// Another exercise 

let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
let seriesWatching = [];
seriesPending.push("JS Master");
for (let i =0; i<seriesPending.length; i++){
    console.log(`Index: ${i} | Content: ${seriesPending[i]}`);
    if (seriesPending[i] === "Boolean 99"){
        console.log("Found it");
    }
}
console.log(`Total series: ${seriesPending.length} | Watched: ${seriesWatching.length}`);

let fristSerie = seriesPending.shift();
seriesWatching.push(fristSerie);
console.log(`Total series: ${seriesPending.length} | Watched: ${seriesWatching.length}`);
console.log(seriesPending.length)
for(let i = 0; i < 4; i++){
    let serieDeleted = seriesPending.shift();
    seriesWatching.push(serieDeleted);
    console.log(seriesPending.length);
}
console.log(`Total series: ${seriesPending.length} | Watched: ${seriesWatching.length}`); 

// Challenges

function pickOdd (arr) {
    const oddNumbers = []; // do not remove or change this line
  
for (let i = 0; i<arr.length; i++){
    if ((arr[i]%2) != 0){
        oddNumbers.push(arr[i])
    } 
}
    
    return oddNumbers; // do not remove or change this line
  }

// Nesting Arrays and Objects. Exercise 1

let products = [
    {
        name: 'Iphone',
        price: 799.99
    },
    {
        name: 'Samsung Galaxy S10',
        price: 900.0
    }
];
let newPhone = {
    name: 'Nokia',
    price: 500
}
products.unshift(newPhone);
products.pop();
console.table(products);
console.log(`There are ${products.length} phones availables: ${products[0].name} and ${products[1].name}.`)
console.log(`The price of ${products[0].name} is: ${products[0].price}`);

// Nesting Arrays and Objects. Exercise 2

let course = {
    name: 'Web Development',
    type: ['full-time', 'part-time'],
    topics: ['HTML/CSS & Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']
  };
console.log(course.type[0]);
console.log(`The most familiar topic is: ${course.topics[1]} and the least familiar topic is: ${course.topics[4]}`);

// Nesting Arrays and Objects. Exercise 3

let student = {
    firstName: 'Ana',
    lastName: 'Blair',
    course: {
      name: 'Web Development',
      type: 'part-time'
    },
    attendedIn: 'Madrid',
    address: {
      street: 'Happy Street',
      number: 123,
      city: 'Barcelona',
      zip: 08015,
      country: 'Spain'
    }
  };
  
  console.log(student.course.name); 
  // => Web Development
  console.log(student.address.street); 
  // => Happy Street
  console.log(`Ana moved from ${student.address.city} to ${student.attendedIn} to take ${student.course.type} ${student.course.name} course`);
  // => .
  

  // Challenge

  let pizzas = [
    { type: 'pineapple', size: 'M'},
    { type: 'pepperoni', size: 'S'},
    { type: 'mushrooms', size: 'L'},
    { type: 'pineapple', size: 'S'},
  ];
 
  let newArray = [];
  for (let i=0; i<pizzas.length-1; i++){
  if (pizzas[i].type != 'pineapple'){
    newArray.push(pizzas[i]);
  }
}
 console.table(newArray);

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

let myArr = [2, 4, 1, 3];
let result = myArr.reduce();
conslole.log(reduce);
