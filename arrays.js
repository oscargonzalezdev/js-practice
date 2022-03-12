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

// Using splice

let recipeCake2 = ["flour", "eggs", "milk", "butter", "sugar", "oil"];
recipeCake2.splice(1, 1);
console.log(recipeCake2);
recipeCake2.splice(3, 1, "brown sugar");
console.log(recipeCake2);
recipeCake2.splice(2, 0, "vanille");
console.log(recipeCake2);