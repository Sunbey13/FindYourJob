const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeButton = document.querySelector('.close-button');

const toggleMenu = (event) => {
    menu.classList.toggle('is-open');
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);