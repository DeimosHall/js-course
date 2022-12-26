let name = "         Name      "
console.log(name) // "         Name      "
console.log(name.trim()) // "Name"
console.log(name)

let myProduct = 'Monitor 20'
console.log(myProduct);
myProduct = myProduct.replace("20", '20"')
console.log("replace: " + myProduct); // Monitor 20"

// slice cuts the string (start, end)
myProduct = myProduct.slice(0, 7);
console.log(myProduct); // Monitor

myProduct = "Monitor 20\"";
console.log(myProduct.substring(0, 7));
console.log(myProduct.repeat(2));

myProduct = 'Monitor 20"';
console.log(myProduct.substring(0, 7)); // Monitor
console.log(myProduct.repeat(3)); // Monitor 20"Monitor 20"Monitor 20"

// How to separate a phrase by spaces
let phrase = "Hello World :D";
console.log(phrase.split(" ")) // ["Hello", "World", ":D"]

// How to get the first letter of a word
let myName = "Cayuya";
console.log(myName.substring(0, 1)); // C
console.log(myName.charAt(0)); // C

// Convert to upper and lower case
console.log(myName); // Cayuya
console.log(myName.toUpperCase()); // CAYUYA
console.log(myName.toLowerCase()); // cayuya

/*
 * The difference between susbtring and slice is that if you try something like
 * variable.slice(15, 2); it will do nothing, but variable.substring(15, 2);
 * will be changed for variable.substring(2, 15); at runtime.
 */