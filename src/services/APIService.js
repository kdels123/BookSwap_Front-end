const API_URL = 'http://localhost:8080/api/user';
const BOOK_API_TITLE_URL = 'https://www.googleapis.com/books/v1/volumes?q=&BOOKTITLE&&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'
const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes?q=harrypotter+inauthor:rowling&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'

let _singleton = Symbol();
export default class APIService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllResults(title) {
        return fetch(BOOK_API_TITLE_URL.replace('&BOOKTITLE&', title))
            .then(function (response) {
                return response.json()
            })
    }
    

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new APIService(_singleton);
        return this[_singleton]
    }
}