const btnFloating = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFloating.addEventListener('click', () => {
    console.log('Click');
    
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFloating.classList.remove('activo');
        btnFloating.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnFloating.classList.add('activo');
        btnFloating.textContent = 'X Cerrar';
    }
});