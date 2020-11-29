import Carousel from './modules/image-carousel';

const carouselDivs = document.querySelectorAll('.carousel');
const carousels = [];
carouselDivs.forEach((element) => {
  carousels.push(new Carousel(element, 5, 250));
});

const buttons = carousels[0].display.querySelectorAll('i');

buttons.forEach((button) => {
  console.log(button);
  if (button.classList.contains('fa-caret-left')) {
    button.addEventListener('click', () => {
      carousels[0].previousImage();
    });
  } else if (button.classList.contains('fa-caret-right')) {
    button.addEventListener('click', () => {
      carousels[0].nextImage();
    });
  }
});
