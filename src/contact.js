import { Hamburger } from './js/hamburger';
import { Labels } from './js/labels';
import { Map } from './js/map';
import { Form } from './js/form';

class Contact {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new Labels();
      new Map();
      new Form();
    });
  }
}

Contact.init();
