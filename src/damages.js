import { Hamburger } from './js/hamburger';
import { Tabs } from './js/tabs';

class Damages {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new Tabs();
    });
  }
}

Damages.init();
