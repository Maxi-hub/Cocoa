const textBlock = document.querySelectorAll('.about__box');
const buttonEl = document.querySelector('.button-skip');
const headerEL = document.querySelector('.header');
const wrapperBlock = document.querySelector('.wrapper');
const wallpaperBlock = document.querySelector('.wallpaper');

document.addEventListener("DOMContentLoaded", () => {
    const zoomWallpaper = setTimeout(() => {
        const img = document.querySelector(".wallpaper__img");
        img.classList.add("zoom-in");
        headerEL.style.display = 'none';
    }, 7000);

    const appearPage = setTimeout(() => {
        wallpaperBlock.style.display = 'none';
        wrapperBlock.style.display = 'inline-block';

        window.scrollTo({
            top: 10,
            left: 0,
            behavior: "smooth",
        });

    }, 10000);

    const appearHeader = setTimeout(() => {
        headerEL.style.display = 'flex';
        headerEL.style.animation = 'show 5s';
    }, 13000);

    buttonEl.addEventListener('click', function (e) {
        wallpaperBlock.style.display = 'none';
        wrapperBlock.style.animation = 'show 3s';
        wrapperBlock.style.display = 'inline-block';
        headerEL.style.display = 'flex';
        headerEL.style.animation = 'show 4s';

        window.scrollTo({
            top: 220,
            left: 0,
            behavior: "smooth",
        });

        clearTimeout(zoomWallpaper);
        clearTimeout(appearPage);
        clearTimeout(appearHeader);
    });
});

textBlock.forEach(text => {
    text.addEventListener('click', () => {
        text.classList.toggle('visible');
        text.style.cursor = 'default';
    });

    text.addEventListener('mouseenter', () => {
        text.style.cursor = 'url(img/cursor-touch.png), auto';
    });
});


const headerImgMenu = document.querySelector('.header__imgMenu');
const headMenu = document.querySelector('.header__menu-box');

headerImgMenu.addEventListener('click', () => {
    headMenu.style.display = 'flex';
});

const closeMenuButton = document.querySelector('.header__menu-button');
closeMenuButton.addEventListener('click', () => {
    headMenu.style.display = 'none';
});



