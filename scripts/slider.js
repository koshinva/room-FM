const data = [
  {
    id: 1,
    title: 'Discover innovative ways to decorate',
    description:
      'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    img: './images/desktop-image-hero-1.jpg',
  },
  {
    id: 2,
    title: 'We are available all across the globe',
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business.   Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: './images/desktop-image-hero-2.jpg',
  },
  {
    id: 3,
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology   to ensure that every product is made as perfect and as consistent as possible. With three decades of   experience in this industry, we understand what customers want for their home and office.',
    img: './images/desktop-image-hero-3.jpg',
  },
];

class Slider {
  #nextBtnArr;
  #prevBtnArr;
  #shopTitle;
  #shopDescription;
  #imageHero;
  #data;
  #index;
  #lengthData;
  #timeAnimateMc;

  constructor() {
    this.#nextBtnArr = document.querySelectorAll('.button-controls__btn_next');
    this.#prevBtnArr = document.querySelectorAll('.button-controls__btn_prev');
    this.#shopTitle = document.querySelector('.shop-now__title');
    this.#shopDescription = document.querySelector('.shop-now__description');
    this.#imageHero = document.querySelector('.grid__image-hero');
    this.#data = data;
    this.#index = 0;
    this.#lengthData = this.#data.length;
    this.#timeAnimateMc = 400;
  }

  #render = function (index) {
    this.#animateOpacityText(this.#shopTitle, this.#data[index].title);
    this.#animateOpacityText(this.#shopDescription, this.#data[index].description);
    this.#slideImage(index);
  };

  #startRender = function () {
    this.#shopTitle.textContent = this.#data[0].title;
    this.#shopDescription.textContent = this.#data[0].description;
    this.#initImage();
  };

  #animateOpacityText = function (element, valueForChange) {
    const animation = element.animate([{ opacity: '1' }, { opacity: '0' }], this.#timeAnimateMc);
    animation.addEventListener('finish', () => {
      element.textContent = valueForChange;
      element.animate([{ opacity: '0' }, { opacity: '1' }], this.#timeAnimateMc);
    });
  };

  #slideImage = function (index) {
    const child = this.#imageHero.children;
    const imgs = Array.from(child).filter((c) => !c.classList.contains('button-controls'));
    imgs.map((img) => img.classList.remove('active'));
    imgs[index].classList.add('active');
  };

  #initImage = function () {
    for (let i = 0; i < this.#lengthData; i++) {
      const div = document.createElement('div');
      if (i === 0) {
        div.classList.add('active');
      }
      div.style.backgroundImage = `url(${this.#data[i].img})`;

      this.#imageHero.appendChild(div);
    }
  };

  init = function () {
    this.#startRender();
    this.#hangHandlers();
  };

  #hangHandlers = function () {
    if (this.#nextBtnArr.length && this.#prevBtnArr.length) {

      this.#nextBtnArr.forEach(element => {
        element.addEventListener('click', this.#handleNext.bind(this));
      });
      this.#prevBtnArr.forEach(element => {
        element.addEventListener('click', this.#handlePrev.bind(this));
      });
      
    }
  };

  #handleNext = function () {
    this.#index = this.#index + 1 >= this.#lengthData ? 0 : this.#index + 1;
    this.#render(this.#index);
  };

  #handlePrev = function () {
    this.#index = this.#index - 1 < 0 ? this.#lengthData - 1 : this.#index - 1;
    this.#render(this.#index);
  };
}

const slider = new Slider();

document.addEventListener('DOMContentLoaded', () => {
  slider.init();
});
