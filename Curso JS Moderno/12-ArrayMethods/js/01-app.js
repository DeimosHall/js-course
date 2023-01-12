const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

console.log('Includes');
meses.forEach(mes => {
    if (mes === 'Enero') console.log('Enero existe');
});

let month = 'Enero';
console.log(meses.includes(month) ? `${month} existe` : `${month} no existe`);
month = 'Diciembre';
console.log(meses.includes(month) ? `${month} existe` : `${month} no existe`);

// Do the same with an object
let product = 'Celular';
const phoneExists = carrito.some(item => {
    return item.nombre === product;
});

console.log(`Phone exists: ${phoneExists}`);

// Find an index in an array
console.log('\nfindIndex');
month = 'Marzo';
console.log(`${month} at: ${meses.findIndex(item => item === month)}`);

month = 'Diciembre';
console.log(`${month} at: ${meses.findIndex(item => item === month)}`);

// Find an index in an object
product = 'Teclado';
console.log(`${product} at: ${carrito.findIndex(item => item.nombre === product)}`);

// Calculate the amount of the price
let total = 0;
carrito.forEach(item => total += item.precio);
console.log(`Total price: ${total}`);

// With reduce
console.log(
    `Total price: ${carrito.reduce((total, item) => total + item.precio, 0)}`
);


// Items that match a condition
let result = carrito.filter(item => item.precio > 400);
console.log(result);

// Removes an item
result = carrito.filter(item => item.nombre !== 'Tablet');
console.log(result);

// Create an array with the item we want
result = carrito.find(item => item.nombre === 'Televisión');
console.log(result);

// Returns true if all the items matches the condition
result = carrito.every(item => item.precio < 1000); // true
console.log(result);
result = carrito.every(item => item.precio > 1000); // false
console.log(result);

// Join arrays or objects
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const meses3 = meses.concat(meses2);
console.log(meses3);

// Join with the spread operator
const meses4 = [...meses, ...meses2];
console.log(meses4);
meses5 = ['Cero month', ...meses, 'Agosto'];
console.log(meses5);