export function showAlert(msg, className) {
  const form = document.getElementById('contactForm');
  const div = document.createElement('div');

  div.className = `contact-a__alert contact-a__alert--${className}`;
  div.appendChild(document.createTextNode(msg));

  form.insertAdjacentElement('beforebegin', div);

  setTimeout(() => {
    document.querySelector('.contact-a__alert').remove();
  }, 5000);
}
