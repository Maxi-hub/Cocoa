const headerImgMenu = document.querySelector('.header__imgMenu');
const headMenu = document.querySelector('.header__menu-box');

headerImgMenu.addEventListener('click', () => {
    headMenu.style.display = 'flex';
});

const closeMenuButton = document.querySelector('.header__menu-button');
closeMenuButton.addEventListener('click', () => {
    headMenu.style.display = 'none';
});