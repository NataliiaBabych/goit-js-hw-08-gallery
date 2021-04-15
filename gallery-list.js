import pictures from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');
const itemMarkup = createGalleryItemMakup(pictures);

galleryList.insertAdjacentHTML('afterbegin', itemMarkup);

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
