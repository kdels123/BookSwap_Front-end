// const BOOK_API_LOCAL = 'http://localhost:8080/api/book';
const URL = 'https://cs5610-project-kdelsener.herokuapp.com/api/book';

let _singleton = Symbol();
export default class BookService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    addBook(bookId, bookTitle, bookAuthor) {
        return fetch(URL, {
            method: 'post',
            body: JSON.stringify({bookId: bookId, title: bookTitle, author: bookAuthor}),
            headers: {
                'content-type': 'application/json',
            }}).then(function (response)
        {
            return response.json(); }).catch((err) => console.log(err));
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new BookService(_singleton);
        return this[_singleton]
    }
}