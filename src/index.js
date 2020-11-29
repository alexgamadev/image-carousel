import Carousel from './modules/image-carousel';

const carouselDivs = document.querySelectorAll('.carousel');
const carousels = [];
carouselDivs.forEach((element) => {
  carousels.push(new Carousel(element, 5, 250));
});
