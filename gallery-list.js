import pictures from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  imageMod: document.querySelector('.lightbox__image')
};

const itemMarkup = createGalleryItemMakup(pictures);
refs.gallery.insertAdjacentHTML('afterbegin', itemMarkup);

refs.gallery.addEventListener('click', onGalleryItemClick);

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

function onGalleryItemClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  };
  evt.preventDefault();
  refs.modal.classList.add('is-open');
  refs.imageMod.setAttribute('src', evt.target.getAttribute('data-source'));
  console.log(evt.target.dataset.original);
};

function closeGalleryItem(evt) {
  if (evt.target.classList.contains('lightbox__overlay')) { 
  refs.modal.classList.remove('is-open');
    refs.imageMod.removeAttribute('src');
  };
  if (evt.target.classList.contains('lightbox__button')) {
    refs.modal.classList.remove('is-open');
    refs.imageMod.removeAttribute('src');
  }
};