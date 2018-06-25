const BOOK_API_ID = 'https://www.googleapis.com/books/v1/volumes/&ID&?key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'
const BOOK_API_TITLE_URL = 'https://www.googleapis.com/books/v1/volumes?q=&BOOKTITLE&&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'
const BOOK_API_AUTHOR_URL = 'https://www.googleapis.com/books/v1/volumes?q=+inauthor:&BOOKAUTHOR&&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'
const BOOK_API_TITLE_AUTHOR_URL = 'https://www.googleapis.com/books/v1/volumes?q=&BOOKTITLE&+inauthor:&BOOKAUTHOR&&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'

let _singleton = Symbol();
export default class APIService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findResultsByTitle(title) {
        return fetch(BOOK_API_TITLE_URL.replace('&BOOKTITLE&', title))
            .then(function (response) {
                return response.json()
            })
    }

    findResultsByAuthor(author) {
        return fetch(BOOK_API_AUTHOR_URL.replace('&BOOKAUTHOR&', author))
            .then(function (response) {
                return response.json()
            })
    }

    findResultsByTitleAuthor(title, author) {
        return fetch(BOOK_API_TITLE_AUTHOR_URL.replace('&BOOKTITLE&', title).replace('&BOOKAUTHOR&', author))
            .then(function (response) {
                return response.json()
            })
    }

    findBookByID(bookId) {
        return fetch (BOOK_API_ID.replace('&ID&', bookId)).then(function (response){
            return response.json()
        })
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new APIService(_singleton);
        return this[_singleton]
    }
}