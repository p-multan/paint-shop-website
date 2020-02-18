import { Hamburger } from './js/hamburger';
import { Tabs } from './js/tabs';

class Damages {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      const hamburger = new Hamburger();
      const tabs = new Tabs();
    });
  }
}

Damages.init();
