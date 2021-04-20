import pictures from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  imageMod: document.querySelector('.lightbox__image')
};

// Создание и рендер разметки

const itemMarkup = createGalleryItemMakup(pictures);

function createGalleryItemMakup(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `
<li class="gallery__item">
  <a class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
` ;
    }).join('');
};

refs.gallery.insertAdjacentHTML('afterbegin', itemMarkup);

// 
refs.gallery.addEventListener('click', openGalleryItem);
refs.modal.addEventListener('click', closeGalleryItem);

// Открытие модального окна
function openGalleryItem(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  };
  evt.preventDefault();
  refs.modal.classList.add('is-open');
  refs.imageMod.setAttribute('src', evt.target.getAttribute('data-source'));
};

// Закрытие модального окна
function closeModal() {
refs.modal.classList.remove('is-open');
refs.imageMod.removeAttribute('src');
 };

function closeGalleryItem(evt) {
  if (evt.target.classList.contains('lightbox__overlay')) { 
    closeModal();
  };
  if (evt.target.classList.contains('lightbox__button')) {
    closeModal();
  };
};