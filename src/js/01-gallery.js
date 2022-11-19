// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", createGalleryImages(galleryItems));

function createGalleryImages(images) {
  return images.map(
      (image) => `
        <a class="gallery__item" href="${image.original}">
         <img
         class="gallery__image"
         src="${image.preview}"
         alt="${image.description}"
        />
        </a>
    `
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
