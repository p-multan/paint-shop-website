import { Hamburger } from './js/hamburger';

class Basic {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
    });
  }
}

Basic.init();
