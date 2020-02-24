import { Hamburger } from './js/hamburger';
import { Gallery } from './js/gallery';

class Basic {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new Gallery();
    });
  }
}

Basic.init();
