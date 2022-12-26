"use strict";

// Object literal
const product = {
    name: "TV",
    price: 300,
    available: true
}

console.log(`${product.name}: ${product.price}`); // TV: $300
product.price = 350;
console.log(`${product.name}: ${product.price}`); // TV: $350

// Delete an object property
console.log("Before delete available");
console.log(product);
delete product.available;
console.log("After delete available");
console.log(product);

// Get elements with destructurig
let { name, price } = product;
console.log(name);
console.log(price);

const product2 = {
    name: "TV",
    price: 500,
    available: true,
    info: {
        weight: "2kg",
        length: "1m",
        location: {
            country: "China"
        }
    },
}

console.log(product2);

// Accesing to country from product2
let { info: { location: { country } } } = product2; // info and location are not created
console.log(country); // China

// How to avoid modifying an object, it's needed to activate "use strict"
Object.freeze(product2);
//product2.name = "Other name"; // The error is that name is read only
console.log(`product2 is frozen: ${Object.isFrozen(product2)}`);

// Freeze is very strict, but is we want to modify the value of properties, but we
// want to avoid adding or deleting items we can use seal()
const product3 = Object.assign({}, product2);
console.log(`product3 is frozen: ${Object.isFrozen(product3)}`);
Object.seal(product3);

// Copying an object with the spread operator
const product4 = {...product2}; // ... means make a copy of product2
console.log(`product4 is frozen: ${Object.isFrozen(product4)}`);

// Get the keys of an object
// We can use to know if an object from an API is empty or not
console.log(`Keys: ${Object.keys(product4)}`);
console.log(`Values: ${Object.values(product4)}`);