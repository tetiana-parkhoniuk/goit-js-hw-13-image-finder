import './sass/main.scss';
import photosTemplate from './templates/photo-card.hbs';

import getRefs from './js/getRefs';
// import API from './js/apiService';
import ImagesApiService from './js/apiService';
 
const refs = getRefs();

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();

    imagesApiService.query = event.currentTarget.elements.query.value;
    imagesApiService.resetPage();
    imagesApiService.fetchImages().then(appendImagesMarkup);

    // API.fetchImages(searchQuery)
    //     .then(response => {
    //         if (!response) {
    //             return;
    //         } else {
    //             console.log(response);
    //         }
    //     })

}

function onLoadMore() {
    imagesApiService.fetchImages().then(appendImagesMarkup);
}

function appendImagesMarkup(data) {
    refs.imagesContainer.insertAdjacentElement('beforeend', photosTemplate(data));
};