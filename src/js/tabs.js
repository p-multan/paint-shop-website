export class Tabs {
  constructor() {
    this.tabs = document.querySelector('.js-tabs');
    this.singleTabs = document.querySelectorAll('.js-tab');
    this.panels = document.querySelectorAll('.js-panel');

    this.tabs.addEventListener('click', this.changeTabsHandler);
  }

  changeTabsHandler(e) {
    if (e.target.tagName === 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.info);
      this.panels.forEach(panel => {
        if (panel === targetPanel) {
          panel.classList.add('js-active');
          this.singleTabs.forEach(tab => tab.classList.remove('js-active'));
          document
            .querySelector(`[data-info="${e.target.dataset.info}"]`)
            .classList.add('js-active');
        } else {
          panel.classList.remove('js-active');
        }
      });
    }
  }
}
