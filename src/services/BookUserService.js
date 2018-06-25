const BOOK_USER_API_LOCAL = 'http://localhost:8080/api/book/BID/user/UID';

let _singleton = Symbol();
export default class BookUserService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    addBookToUser(userId, bookId) {
        return fetch(BOOK_USER_API_LOCAL.replace('BID', bookId).replace('UID', userId), {
            method: 'post',
            body: JSON.stringify({userId: userId, bookId: bookId}),
            headers: {
                'content-type': 'application/json',
            }}).then(function (response) {
            return response.json()
        });
    }

    findAllBooksForUser(userId) {
        return fetch('http://localhost:8080/api/book/user/' + userId)
            .then(function (response) { return response.json();
            })
    }

    findAllUsersForBook(bookId) {
        return fetch('http://localhost:8080/api/book/' + bookId + '/user/')
            .then(function (response) { return response.json();
            })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new BookUserService(_singleton);
        return this[_singleton]
    }
}