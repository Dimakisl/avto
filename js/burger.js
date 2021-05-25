const menuElem = document.querySelector('.menu');
const humbergerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humbergerElem.classList.toggle('humburger-menu-active');
}

humbergerElem.addEventListener('click', toggleMenu);