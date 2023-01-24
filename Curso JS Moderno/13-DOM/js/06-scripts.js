const nav = document.querySelector('.navegacion');
console.log(nav);
console.log(nav.children);

const card = document.querySelector('.card');
console.log(card.children[0].src);
card.children[0].src = 'img/hacer3.jpg';

const card2 = card.nextElementSibling;
console.log(card2.children);