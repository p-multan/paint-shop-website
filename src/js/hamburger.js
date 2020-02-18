export class Hamburger {
  constructor() {
    this.hamburgerIcon = document.getElementById('hamburger-icon');
    this.hamburgerBackdrop = document.getElementById('hamburger-backdrop');
    this.hamburgerMenu = document.getElementById('hamburger-menu');

    this.hamburgerIcon.addEventListener('click', this.menuVisibilityHandler);
    this.hamburgerBackdrop.addEventListener(
      'click',
      this.menuVisibilityHandler
    );
  }

  menuVisibilityHandler() {
    this.hamburgerIcon.classList.toggle('js-active');
    this.hamburgerBackdrop.classList.toggle('js-active');
    this.hamburgerMenu.classList.toggle('js-active');
  }
}
