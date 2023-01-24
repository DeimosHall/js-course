// Delete DOM items
const firstLink = document.querySelector('a');
firstLink.remove();

const nav = document.querySelector('.navegacion');
console.log(nav.children[2]);
nav.removeChild(nav.children[2]);