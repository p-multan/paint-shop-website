import { Hamburger } from './js/hamburger';
import { Labels } from './js/labels';
import { Map } from './js/map';

class Contact {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      const hamburger = new Hamburger();
      const labels = new Labels();
      const map = new Map();
    });
  }
}

Contact.init();
