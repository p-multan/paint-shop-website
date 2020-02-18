const photos = document.querySelectorAll('.js-photo');
const extendPhotos = document.querySelectorAll('.js-enlarge');
const extendIcons = document.querySelectorAll('.js-enlarge-icon');
const backdrop = document.querySelector('.js-backdrop');
const centerPhoto = document.querySelector('.js-gallery-big');
const activePhoto = document.querySelector('.js-gallery-big-photo');
const controls = document.querySelectorAll('.js-control');
const photosNumber = photos.length;

backdrop.addEventListener('click', () => {
  backdrop.classList.remove('js-active');
  centerPhoto.classList.remove('js-active');
});

extendPhotos.forEach(extendPhoto => {
  extendPhoto.addEventListener('click', e => {
    const src = e.target.previousElementSibling.getAttribute('src');
    backdrop.classList.add('js-active');

    activePhoto.setAttribute('src', src);
    centerPhoto.classList.add('js-active');
  });
});

extendIcons.forEach(extendIcon => {
  extendIcon.addEventListener('click', e => {
    const src = e.target.parentElement.previousElementSibling.getAttribute(
      'src'
    );
    backdrop.classList.add('js-active');

    activePhoto.setAttribute('src', src);
    centerPhoto.classList.add('js-active');
  });
});

controls.forEach(control => {
  control.addEventListener('click', e => {
    if (e.target.classList.contains('js-previous')) {
      const numberPattern = /\d+/g;
      const currentSrc = activePhoto.getAttribute('src');
      const currentNumber = +currentSrc.match(numberPattern)[0];
      const newNumber =
        currentNumber - 1 > 0 ? currentNumber - 1 : photosNumber;
      const newSrc = currentSrc.replace(currentNumber, newNumber);
      activePhoto.setAttribute('src', newSrc);
    } else if (e.target.classList.contains('js-next')) {
      const numberPattern = /\d+/g;
      const currentSrc = activePhoto.getAttribute('src');
      const currentNumber = +currentSrc.match(numberPattern)[0];
      const newNumber =
        currentNumber + 1 > photosNumber ? 1 : currentNumber + 1;
      const newSrc = currentSrc.replace(currentNumber, newNumber);
      activePhoto.setAttribute('src', newSrc);
    } else if (e.target.classList.contains('js-close')) {
      backdrop.classList.remove('js-active');
      centerPhoto.classList.remove('js-active');
    }
  });
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 37) {
    const numberPattern = /\d+/g;
    const currentSrc = activePhoto.getAttribute('src');
    const currentNumber = +currentSrc.match(numberPattern)[0];
    const newNumber = currentNumber - 1 > 0 ? currentNumber - 1 : photosNumber;
    const newSrc = currentSrc.replace(currentNumber, newNumber);
    activePhoto.setAttribute('src', newSrc);
  } else if (e.keyCode === 39) {
    const numberPattern = /\d+/g;
    const currentSrc = activePhoto.getAttribute('src');
    const currentNumber = +currentSrc.match(numberPattern)[0];
    const newNumber = currentNumber + 1 > photosNumber ? 1 : currentNumber + 1;
    const newSrc = currentSrc.replace(currentNumber, newNumber);
    activePhoto.setAttribute('src', newSrc);
  } else if (e.keyCode === 27) {
    backdrop.classList.remove('js-active');
    centerPhoto.classList.remove('js-active');
  }
});
