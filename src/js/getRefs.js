export default function getRefs() {
    const refs = {
        searchForm: document.querySelector('#search-form'),
        imagesContainer: document.querySelector('.gallery'),
        // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    };

    return refs;
}

