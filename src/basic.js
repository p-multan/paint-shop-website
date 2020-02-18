import { Hamburger } from './js/hamburger';

class Basic {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      const hamburger = new Hamburger();
    });
  }
}

Basic.init();
