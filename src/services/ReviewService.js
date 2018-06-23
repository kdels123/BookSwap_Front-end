const REVIEW_API_LOCAL = 'http://localhost:8080/api/review';
// const USER_API_REMOTE = 'https://webdev-summer1-2018-delsener.herokuapp.com/api/course/CID/module';

let _singleton = Symbol();
export default class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    createReview(reviewTitle, reviewDescription, reviewDate, bookId, userId) {
        return fetch('http://localhost:8080/api/book/' + bookId +'/user/' + userId + '/review', {
            method: 'post',
            body: JSON.stringify({title: reviewTitle, description: reviewDescription, date: reviewDate}),
            headers: { 'Content-Type': 'application/json' },
        }).then(function (response) {
            return response.json(); })
            .catch(() => alert('You are now logged-out'));
    }

    findAllReviewsForBook(bookId) {
        return fetch('http://localhost:8080/api/book/' + bookId + '/review')
            .then(function (response) { return response.json();
        })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }
}