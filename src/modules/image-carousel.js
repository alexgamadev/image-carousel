/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
export default class Carousel {
  constructor(element, numImages, width) {
    this._element = element;
    this._numImages = numImages;
    this._width = width;
    this._currentIndex = 0;

    [this._display] = element.querySelectorAll('.carousel-display');
    [this._imagesContainer] = this._display.querySelectorAll('.carousel-images');
  }

  nextImage() {
    this._currentIndex += 1;
    if (this._currentIndex >= this._numImages) {
      this._currentIndex = 0;
    }

    this._imagesContainer.style.transform = `translate(-${this._currentIndex * (this._width + 10)}px)`;
    setTimeout(200);
  }

  previousImage() {
    this._currentIndex -= 1;
    if (this._currentIndex < 0) {
      this._currentIndex = this._numImages - 1;
    }

    this._imagesContainer.style.transform = `translate(-${this._currentIndex * (this._width + 10)}px)`;
    setTimeout(200);
  }

  goToImage(index) {
    this._imagesContainer.style.transform = `translate(-${index * (this._width + 10)}px)`;
    setTimeout(200);
  }

  get display() {
    return this._display;
  }
}
