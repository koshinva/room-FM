function toggleMenuMobile() {
  const OPEN_MENU = 'open-menu';

  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const body = document.body;

  burger.addEventListener('click', function () {
    this.classList.toggle(OPEN_MENU);
    body.classList.toggle(OPEN_MENU);
    nav.classList.toggle(OPEN_MENU);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  toggleMenuMobile();
});
