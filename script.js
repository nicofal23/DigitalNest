// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// Fijar el navbar al hacer scroll
window.onscroll = function() {
    fixNavbar();
};

var header = document.querySelector('header');
var sticky = header.offsetTop;

function fixNavbar() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

document.getElementById('hamburger').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');

    // Cargar los items desde un archivo JSON externo
    fetch('works.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el JSON');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(work => {
                const item = document.createElement('div');
                item.classList.add('carousel-item');
                item.innerHTML = `
                    <a href="${work.link}" target="_blank">
                        <img src="${work.image}" alt="${work.title}">
                        <p>${work.title}</p>
                        <p class="descripcionJson">${work.descripcion}</p>
                    </a>
                `;
                carousel.appendChild(item);
            });

            // Duplicar los items para que el carrusel sea continuo
            const items = Array.from(carousel.children);
            items.forEach(item => {
                const clone = item.cloneNode(true);
                carousel.appendChild(clone);
            });
        })
        .catch(error => console.error('Error cargando el JSON:', error));
});

