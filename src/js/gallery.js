import 'hammerjs';

export class Gallery {
  constructor() {
    this.photos = document.querySelectorAll('.js-photo');
    this.photosInfo = document.querySelectorAll('.js-photo-content');
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
    this.extendByPhotosInfoHandler();
    this.controlsHandler();
    document.addEventListener('keyup', this.keyHandler.bind(this));

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer.on('swipeleft', this.showNextPhoto.bind(this));
    hammer.on('swiperight', this.showPreviousPhoto.bind(this));

    hammer.on('swipeup', this.backdropClickHandler.bind(this));
    hammer.on('swipedown', this.backdropClickHandler.bind(this));
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

  extendByPhotosInfoHandler() {
    this.photosInfo.forEach(photoInfo => {
      photoInfo.addEventListener('click', e => {
        const src = e.target
          .closest('.js-photo-content')
          .parentElement.previousElementSibling.firstChild.getAttribute('src');
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

  showPreviousPhoto() {
    const numberPattern = /\d+/g;
    const currentSrc = this.activePhoto.getAttribute('src');
    const currentNumber = +currentSrc.match(numberPattern)[0];
    const newNumber =
      currentNumber - 1 > 0 ? currentNumber - 1 : this.photosNumber;
    const newSrc = currentSrc.replace(currentNumber, newNumber);
    this.activePhoto.setAttribute('src', newSrc);
  }

  showNextPhoto() {
    const numberPattern = /\d+/g;
    const currentSrc = this.activePhoto.getAttribute('src');
    const currentNumber = +currentSrc.match(numberPattern)[0];
    const newNumber =
      currentNumber + 1 > this.photosNumber ? 1 : currentNumber + 1;
    const newSrc = currentSrc.replace(currentNumber, newNumber);
    this.activePhoto.setAttribute('src', newSrc);
  }

  controlsHandler() {
    this.controls.forEach(control => {
      control.addEventListener('click', e => {
        if (e.target.classList.contains('js-previous')) {
          this.showPreviousPhoto();
        } else if (e.target.classList.contains('js-next')) {
          this.showNextPhoto();
        } else if (e.target.classList.contains('js-close')) {
          this.backdropClickHandler();
        }
      });
    });
  }

  keyHandler(e) {
    if (e.keyCode === 37) {
      this.showPreviousPhoto();
    } else if (e.keyCode === 39) {
      this.showNextPhoto();
    } else if (e.keyCode === 27) {
      this.backdropClickHandler();
    }
  }
}
