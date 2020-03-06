import 'hammerjs';

export class Gallery {
  constructor() {
    this.photos = document.querySelectorAll('.js-photo');
    this.extendPhotos = document.querySelectorAll('.js-enlarge');
    this.extendIcons = document.querySelectorAll('.js-enlarge-icon');
    this.backdrop = document.getElementById('galleryBackdrop');
    this.centerPhoto = document.getElementById('galleryBig');
    this.activePhoto = document.getElementById('galleryBigPhoto');
    this.controls = document.querySelectorAll('.js-control');
    this.photosNumber = this.photos.length;
    const hammer = new Hammer(this.centerPhoto);

    this.backdrop.addEventListener(
      'click',
      this.backdropClickHandler.bind(this)
    );

    this.extendPhotosHandler();
    this.extendIconsHandler();
    this.controlsHandler();
    document.addEventListener('keyup', this.keyHandler.bind(this));
    hammer.on('swipeleft', () => {
      const numberPattern = /\d+/g;
      const currentSrc = this.activePhoto.getAttribute('src');
      const currentNumber = +currentSrc.match(numberPattern)[0];
      const newNumber =
        currentNumber + 1 > this.photosNumber ? 1 : currentNumber + 1;
      const newSrc = currentSrc.replace(currentNumber, newNumber);
      this.activePhoto.setAttribute('src', newSrc);
    });

    hammer.on('swiperight', () => {
      const numberPattern = /\d+/g;
      const currentSrc = this.activePhoto.getAttribute('src');
      const currentNumber = +currentSrc.match(numberPattern)[0];
      const newNumber =
        currentNumber - 1 > 0 ? currentNumber - 1 : this.photosNumber;
      const newSrc = currentSrc.replace(currentNumber, newNumber);
      this.activePhoto.setAttribute('src', newSrc);
    });
  }

  backdropClickHandler() {
    this.backdrop.classList.remove('js-active');
    this.centerPhoto.classList.remove('js-active');
  }

  extendPhotosHandler() {
    this.extendPhotos.forEach(extendPhoto => {
      extendPhoto.addEventListener('click', e => {
        const src = e.target
          .closest('.gallery__photos-item-cover-enlarge')
          .previousElementSibling.getAttribute('src');
        this.backdrop.classList.add('js-active');

        this.activePhoto.setAttribute('src', src);
        this.centerPhoto.classList.add('js-active');
      });
    });
  }

  extendIconsHandler() {
    this.extendIcons.forEach(extendIcon => {
      extendIcon.addEventListener('click', e => {
        const src = e.target.parentElement.previousElementSibling.getAttribute(
          'src'
        );
        this.backdrop.classList.add('js-active');

        this.activePhoto.setAttribute('src', src);
        this.centerPhoto.classList.add('js-active');
      });
    });
  }

  controlsHandler() {
    this.controls.forEach(control => {
      control.addEventListener('click', e => {
        if (e.target.classList.contains('js-previous')) {
          const numberPattern = /\d+/g;
          const currentSrc = this.activePhoto.getAttribute('src');
          const currentNumber = +currentSrc.match(numberPattern)[0];
          const newNumber =
            currentNumber - 1 > 0 ? currentNumber - 1 : this.photosNumber;
          const newSrc = currentSrc.replace(currentNumber, newNumber);
          this.activePhoto.setAttribute('src', newSrc);
        } else if (e.target.classList.contains('js-next')) {
          const numberPattern = /\d+/g;
          const currentSrc = this.activePhoto.getAttribute('src');
          const currentNumber = +currentSrc.match(numberPattern)[0];
          const newNumber =
            currentNumber + 1 > this.photosNumber ? 1 : currentNumber + 1;
          const newSrc = currentSrc.replace(currentNumber, newNumber);
          this.activePhoto.setAttribute('src', newSrc);
        } else if (e.target.classList.contains('js-close')) {
          this.backdrop.classList.remove('js-active');
          this.centerPhoto.classList.remove('js-active');
        }
      });
    });
  }

  keyHandler(e) {
    if (e.keyCode === 37) {
      const numberPattern = /\d+/g;
      const currentSrc = this.activePhoto.getAttribute('src');
      const currentNumber = +currentSrc.match(numberPattern)[0];
      const newNumber =
        currentNumber - 1 > 0 ? currentNumber - 1 : this.photosNumber;
      const newSrc = currentSrc.replace(currentNumber, newNumber);
      this.activePhoto.setAttribute('src', newSrc);
    } else if (e.keyCode === 39) {
      const numberPattern = /\d+/g;
      const currentSrc = this.activePhoto.getAttribute('src');
      const currentNumber = +currentSrc.match(numberPattern)[0];
      const newNumber =
        currentNumber + 1 > this.photosNumber ? 1 : currentNumber + 1;
      const newSrc = currentSrc.replace(currentNumber, newNumber);
      this.activePhoto.setAttribute('src', newSrc);
    } else if (e.keyCode === 27) {
      this.backdropClickHandler();
    }
  }
}
