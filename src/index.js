import './sass/main.scss';
import photosTemplate from './templates/photo-card.hbs';

import getRefs from './js/getRefs';
import ImagesApiService from './js/apiService';
import LoadMoreBtn from './js/loadMoreBtn';

import { error } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
 
const refs = getRefs();

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();

    imagesApiService.query = event.currentTarget.elements.query.value;

    if (imagesApiService.query === '') {
        return error({
            text: `Please enter specific query!`,
            delay: 500,
            closeHover: true,
        })
    }

    loadMoreBtn.show();
    imagesApiService.resetPage();
    clearImagesContainer();
    fetchImages();
}

function onLoadMore() {
    fetchImages();
    scrollOnLoadMore();
}

function fetchImages() {
    loadMoreBtn.disable();
    imagesApiService.fetchImages().then(images => {
        appendImagesMarkup(images);
        loadMoreBtn.enable();
    }).catch(handleError);
}

function scrollOnLoadMore() {
     try {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
  } catch (error) {
    console.log(error);
  }
}

function appendImagesMarkup(hits) {
    refs.imagesContainer.insertAdjacentHTML('beforeend', photosTemplate(hits));
};

function clearImagesContainer() {
    refs.imagesContainer.innerHTML = '';
}

function handleError() {
    return error({
            text: `Something went wrong. Please try again!`,
            delay: 500,
            closeHover: true,
        })
}
