export default function getRefs() {
    const refs = {
        searchForm: document.querySelector('#search-form'),
        imagesContainer: document.querySelector('.gallery'),
        loadMoreBtn: document.querySelector('.load-more-btn'),
    };

    return refs;
}

