document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var img = document.querySelector(".wallpaper__img");
        img.classList.add("zoom-in"); // Добавляем класс для запуска анимации
        document.querySelector('.header').style.display = 'none';
    }, 7000);

    setTimeout(function () {
        document.querySelector('.wallpaper').style.display = 'none';
        document.querySelector('.wrapper').style.display = 'block';
    }, 10000); // 10000 миллисекунд = 10 секунд

    setTimeout(function () {
        document.querySelector('.header').style.display = 'flex';
        document.querySelector('.header').style.animation = 'show 5s';

        window.scrollTo({
            top: 220,
            left: 0,
            behavior: "smooth",
        });
    }, 13000);
});


const textBlock = document.querySelectorAll('.about__box');

textBlock.forEach(text => {
    text.addEventListener('click', function (event) {
        text.classList.toggle('visible');
        text.classList.toggle('transparent');
    });
    
    document.addEventListener('click', function (event) {
        if (!text.contains(event.target)) {
            text.classList.remove('visible');
            text.classList.add('transparent');
        }
    });
    
});


