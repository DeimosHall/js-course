const link = document.createElement('a');
link.textContent = 'New link';
console.log(link);
link.href = '#';
console.log(link);

const nav = document.querySelector('.navegacion');
nav.appendChild(link); // Create the link at the end
nav.insertBefore(link, nav.children[1]);

// Create a card
const phrase1 = document.createElement('p');
phrase1.textContent = 'Concierto';
phrase1.classList.add('categoria', 'concierto');
console.log(phrase1);

const phrase2 = document.createElement('p');
phrase2.textContent = 'Concierto de Rock';
phrase2.classList.add('titulo');

const phrase3 = document.createElement('p');
phrase3.textContent = '$800 por persona';

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(phrase1);
info.appendChild(phrase2);
info.appendChild(phrase3);
console.log(info.outerHTML);

const img = document.createElement('img');
img.src = "img/hacer2.jpg";

const card = document.createElement('div');
card.classList.add('card');
card.appendChild(img);
card.appendChild(info);
console.log(card.innerHTML);

const container = document.querySelector('.hacer .contenedor-cards');
container.appendChild(card);