// const USER_API_LOCAL = 'http://localhost:8080/api/user';
const URL = 'https://cs5610-project-kdelsener.herokuapp.com/api/user';

let _singleton = Symbol();
export default class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    login(username, password) {
        return fetch (URL + '/login', {
            method: 'post',
            body: JSON.stringify({username: username, password: password}),
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json',
            }})
            .then(function (response){
                return response.json();
            }).catch(() => alert('Username and/or Password not valid, please try again'));
    }

    updateUser(user) {
        return fetch (URL + '/' + user.userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }})
            .then(function (response) {
                return response.json();
        })
    }

    deleteUser(userId) {
        return fetch(URL + '/' + userId, {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    findUserById(userId) {
        return fetch(URL + '/' + userId).then(function (response) {
                return response.json();
        })
    }

    findAllUsers() {
        return fetch(URL + 's').then(function (response) {
            return response.json();
        })
    }

    profile() {
        return fetch('https://cs5610-project-kdelsener.herokuapp.com/api/profile',
            {
                credentials: 'same-origin',
            })
            .then(function (response) {
                return response.json();
            }).catch(() => alert('test'));
    }

    review() {
        return fetch('https://cs5610-project-kdelsener.herokuapp.com/api/user/review',
            {
                credentials: 'same-origin',
            })
            .then(function (response) {
                return response.json();
            }).catch(() => alert('test'));
    }

    logout() {
        return fetch(URL + '/logout', {
            method: 'post',
            credentials: 'same-origin'
        }).then(function (response) {
            return response.json();
        }).catch(() => alert('You are now logged-out'));
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }
}