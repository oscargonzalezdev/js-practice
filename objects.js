// ** JavaScript Exercises **

// Module: Objects

// Exercise 1

let product = {
    name: 'headphones',
    price: 120,
    doesItWork: false,
    previousOwner: 'Bob'
};

for (let oscar in product){
    let myObjet = product[oscar];
    console.log(`${oscar} --> ${myObjet}`)
}

delete product.previousOwner;
product.doesItWork = true;

if (product.price > 100){
    product.discountPercentage = 10;
    product.price -= product.price * (product.discountPercentage / 100)
}

console.table(product);
if ('discountPercentage' in product) {
    console.log(`We got some ${product.name} on sale for just $${product.price}. That's ${product.discountPercentage}% off!`);
}

console.log(Object.keys(product));