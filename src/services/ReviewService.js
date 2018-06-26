const REVIEW_API_LOCAL = 'http://localhost:8080/api/review';
// const USER_API_REMOTE = 'https://webdev-summer1-2018-delsener.herokuapp.com/api/course/CID/module';

let _singleton = Symbol();
export default class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    createReview(reviewTitle, reviewDescription, reviewDate, username, bookId, userId) {
        return fetch('http://localhost:8080/api/book/' + bookId +'/user/' + userId + '/review', {
            method: 'post',
            body: JSON.stringify({title: reviewTitle, description: reviewDescription, date: reviewDate, username: username, userId: userId}),
            headers: { 'Content-Type': 'application/json' },
        }).then(function (response) {
            return response.json(); })
            .catch(() => alert('Must be logged in order to create response'));
    }

    deleteReview(reviewId) {
        return fetch(REVIEW_API_LOCAL + '/' + reviewId, {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    findAllReviewsForBook(bookId) {
        return fetch('http://localhost:8080/api/book/' + bookId + '/review')
            .then(function (response) { return response.json();
        })
    }

    findAllReviewsForUser(userId) {
        return fetch('http://localhost:8080/api/user/' + userId + '/review')
            .then(function (response) { return response.json();
            })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }
}