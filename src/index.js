import { Hamburger } from './js/hamburger';
import { TypeWriter } from './js/typeWriter';

class Basic {
  static init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.dataset.words);
    const wait = txtElement.dataset.wait;

    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new TypeWriter(txtElement, words, wait);
    });
  }
}

Basic.init();
