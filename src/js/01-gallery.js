import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function CreateMarkupGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
    </a>
    `;
    })
    .join('');
}

galleryEl.innerHTML = CreateMarkupGallery(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  overlay: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
