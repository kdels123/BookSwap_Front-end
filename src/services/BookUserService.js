// const BOOK_USER_API_LOCAL = 'http://localhost:8080/api/book/BID/user/UID';
const URL = 'https://cs5610-project-kdelsener.herokuapp.com/api/book/BID/user/UID';


let _singleton = Symbol();
export default class BookUserService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    addBookToUser(userId, bookId) {
        return fetch(URL.replace('BID', bookId).replace('UID', userId), {
            method: 'post',
            body: JSON.stringify({userId: userId, bookId: bookId}),
            headers: {
                'content-type': 'application/json',
            }}).then(function (response) {
            return response.json()
        });
    }

    removeBookFromUser(userId, bookId) {
        return fetch(URL.replace('BID', bookId).replace('UID', userId), {
            method: 'delete'
            }).then(function (response) {
            return response;
        });
    }

    findAllBooksForUser(userId) {
        return fetch('https://cs5610-project-kdelsener.herokuapp.com/api/book/user/' + userId)
            .then(function (response) { return response.json();
            })
    }

    findAllUsersForBook(bookId) {
        return fetch('https://cs5610-project-kdelsener.herokuapp.com/api/book/' + bookId + '/user/')
            .then(function (response) { return response.json();
            })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new BookUserService(_singleton);
        return this[_singleton]
    }
}