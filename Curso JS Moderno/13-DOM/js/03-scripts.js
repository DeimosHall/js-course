const card = document.querySelector('.card'); // It's a class but returns only the first item
console.log(card);

// We can select items like in CSS
const info = document.querySelector('.premium .info');
console.log(info);

const secondCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(secondCard);

// Select by id
const myForm = document.querySelector('#formulario');
console.log(myForm);

const nav = document.querySelector('nav');
console.log(nav);