import { Hamburger } from './js/hamburger';
import { Labels } from './js/labels';
import { Map } from './js/map';

class Contact {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new Labels();
      new Map();
    });
  }
}

Contact.init();
