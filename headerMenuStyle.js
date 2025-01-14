const headerImgMenu = document.querySelector('.header__imgMenu');
const headMenu = document.querySelector('.header__menu-box');

headerImgMenu.addEventListener('click', () => {
    headMenu.style.display = 'flex';
});

const closeMenuButton = document.querySelector('.header__menu-button');
closeMenuButton.addEventListener('click', () => {
    headMenu.style.display = 'none';
});





// const controller = document.querySelector('.controller');
// const images = controller.querySelectorAll('.controller__img');
// let currentImage = 0;

// function nextImage() {
//   images[currentImage].classList.remove('active');
//   images[currentImage].classList.add('prev');
//   currentImage = (currentImage + 1) % images.length;
//   images[currentImage].classList.add('active');
//   images[currentImage].classList.remove('next');
// }

// function prevImage() {
//   images[currentImage].classList.remove('active');
//   images[currentImage].classList.add('next');
//   currentImage = (currentImage - 1 + images.length) % images.length;
//   images[currentImage].classList.add('active');
//   images[currentImage].classList.remove('prev');
// }

// controller.addEventListener('touchstart', (e) => {
//   const touch = e.touches[0];
//   const startX = touch.clientX;
//   const startY = touch.clientY;
//   let isSwiping = false;

//   controller.addEventListener('touchmove', (e) => {
//     const touch = e.touches[0];
//     const endX = touch.clientX;
//     const endY = touch.clientY;
//     const distanceX = endX - startX;
//     const distanceY = endY - startY;

//     if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > 50) {
//       isSwiping = true;
//       if (distanceX > 0) {
//         prevImage();
//       } else {
//         nextImage();
//       }
//     }
//   });

//   controller.addEventListener('touchend', () => {
//     if (isSwiping) {
//       isSwiping = false;
//     }
//   });
// });
