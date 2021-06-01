export default class ImagesApiServie {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '21882924-40498065f1aa5022828b315f8';

        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
            .then(response => response.json())
            .then(data => {
                this.incrementPage();
console.log(data);
                return data;
                
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}



// const options = {
//     headers: {
//         image_type: 'photo',
//         orientation: 'horizontal',
//         q: searchQuery,
//         page: 1,
//         per_page: 12,
//         key: ,
//     }
// }

// function fetchImages(searchQuery) {
//     return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${KEY}`)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             // return Promise.reject(
//             //     error({
//             //         text: `Please enter specific query!`,
//             //         delay: 500,
//             //         closeHover: true,
//             //     })
//             // );
//         });
// }

// export default { fetchImages };