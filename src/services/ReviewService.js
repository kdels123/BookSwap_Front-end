// const REVIEW_API_LOCAL = 'http://localhost:8080/api/review';
const URL = 'https://cs5610-project-kdelsener.herokuapp.com/api/review';

let _singleton = Symbol();
export default class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    createReview(reviewTitle, reviewDescription, reviewDate, username, bookId, userId) {
        return fetch('https://cs5610-project-kdelsener.herokuapp.com/api/book/' + bookId +'/user/' + userId + '/review', {
            method: 'post',
            body: JSON.stringify({title: reviewTitle, description: reviewDescription, date: reviewDate, username: username, userId: userId}),
            headers: { 'Content-Type': 'application/json' },
        }).then(function (response) {
            return response.json(); })
            .catch(() => alert('Must be logged in order to create response'));
    }

    deleteReview(reviewId) {
        return fetch(URL + '/' + reviewId, {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    findAllReviewsForBook(bookId) {
        return fetch('https://cs5610-project-kdelsener.herokuapp.com/api/book/' + bookId + '/review')
            .then(function (response) { return response.json();
        })
    }

    findAllReviewsForUser(userId) {
        return fetch('https://cs5610-project-kdelsener.herokuapp.com/api/user/' + userId + '/review')
            .then(function (response) { return response.json();
            })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }
}