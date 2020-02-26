import { showAlert } from './showAlert';

export class Form {
  constructor() {
    this.formDOM = document.getElementById('contactForm');
    this.formURL = 'https://formspree.io/mrgkqbzo';

    this.formDOM.addEventListener('submit', this.formHandler.bind(this));
  }

  formHandler(e) {
    e.preventDefault();

    const data = {
      nazwa: e.target.name.value,
      email: e.target.email.value,
      temat: e.target.subject.value,
      telefon: e.target.phone.value,
      wiadomosc: e.target.message.value
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    fetch(this.formURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(resContent => {
        if ('error' in resContent) {
          this.formDOM.reset();
          showAlert(
            'Niestety wiadomość nie została wysłana, prosimy jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie prosimy o kontakt poprzez niżej podane sposoby.',
            'fail'
          );
        } else {
          this.formDOM.reset();
          showAlert(
            'Dziękujemy za kontakt, postaramy się odpowiedzieć w możliwie najkrótszym czasie.',
            'success'
          );
        }
      })
      .catch(err => {
        this.formDOM.reset();
        showAlert(
          'Niestety wiadomość nie została wysłana, prosimy jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie prosimy o kontakt poprzez niżej podane sposoby.',
          'fail'
        );
      });
  }
}
