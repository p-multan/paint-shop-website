export class Labels {
  constructor() {
    this.inputs = document.querySelectorAll('.js-input');

    this.handleInputsOnFocus();
    this.handleInputsOnBlur();
  }

  handleInputsOnFocus() {
    this.inputs.forEach(input => {
      input.addEventListener('focus', e => {
        e.target.previousElementSibling.classList.add('js-focus');
      });
    });
  }

  handleInputsOnBlur() {
    this.inputs.forEach(input => {
      input.addEventListener('focus', e => {
        e.target.previousElementSibling.classList.add('js-focus');
      });
    });
  }
}
