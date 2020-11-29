/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
export default class Carousel {
  constructor(element, numImages, width) {
    // Store values
    this._element = element;
    this._numImages = numImages;
    this._width = width;
    this._currentIndex = 0;

    // Get DOM elements
    [this._display] = element.querySelectorAll('.carousel-display');
    [this._imagesContainer] = this._display.querySelectorAll('.carousel-images');
    [this._nav] = this._display.querySelectorAll('.carousel-links');
    this._navCircles = this._nav.querySelectorAll('.carousel-circle');

    // Init elements
    this.toggleNavCircle(this._currentIndex);
    this.initButtons();
    this.initNavCircles();
  }

  nextImage() {
    this.toggleNavCircle(this._currentIndex);

    this._currentIndex += 1;
    if (this._currentIndex >= this._numImages) {
      this._currentIndex = 0;
    }

    this.toggleNavCircle(this._currentIndex);

    this._imagesContainer.style.transform = `translate(-${this._currentIndex * (this._width + 10)}px)`;
  }

  previousImage() {
    this.toggleNavCircle(this._currentIndex);

    this._currentIndex -= 1;
    if (this._currentIndex < 0) {
      this._currentIndex = this._numImages - 1;
    }
    this.toggleNavCircle(this._currentIndex);

    this._imagesContainer.style.transform = `translate(-${this._currentIndex * (this._width + 10)}px)`;
  }

  goToImage(index) {
    this.toggleNavCircle(this._currentIndex);
    this.toggleNavCircle(index);

    this._currentIndex = index;
    this._imagesContainer.style.transform = `translate(-${index * (this._width + 10)}px)`;
  }

  get display() {
    return this._display;
  }

  initButtons() {
    this._buttons = this._display.querySelectorAll('i');
    this._buttons.forEach((button) => {
      if (button.classList.contains('fa-caret-left')) {
        button.addEventListener('click', () => { this.previousImage(); });
      } else if (button.classList.contains('fa-caret-right')) {
        button.addEventListener('click', () => { this.nextImage(); });
      }
    });
  }

  initNavCircles() {
    this._navCircles.forEach((circle) => {
      circle.addEventListener('click', ({ currentTarget }) => {
        const index = currentTarget.attributes['data-carousel-image'].value;
        this.goToImage(index);
      });
    });
  }

  toggleNavCircle(index) {
    this._navCircles[index].classList.toggle('selected');
  }
}
