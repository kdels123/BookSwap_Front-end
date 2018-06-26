const USER_API_LOCAL = 'http://localhost:8080/api/user';
// const USER_API_REMOTE = 'https://webdev-summer1-2018-delsener.herokuapp.com/api/course/CID/module';

let _singleton = Symbol();
export default class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    login(username, password) {
        return fetch (USER_API_LOCAL + '/login', {
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
        return fetch (USER_API_LOCAL + '/' + user.userId, {
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
        return fetch(USER_API_LOCAL + '/' + userId, {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    findUserById(userId) {
        return fetch(USER_API_LOCAL + '/' + userId).then(function (response) {
                return response.json();
        })
    }

    findAllUsers() {
        return fetch(USER_API_LOCAL + 's').then(function (response) {
            return response.json();
        })
    }

    profile() {
        return fetch('http://localhost:8080/api/profile',
            {
                credentials: 'same-origin',
            })
            .then(function (response) {
                return response.json();
            }).catch(() => alert('test'));
    }

    review() {
        return fetch('http://localhost:8080/api/user/review',
            {
                credentials: 'same-origin',
            })
            .then(function (response) {
                return response.json();
            }).catch(() => alert('test'));
    }

    logout() {
        return fetch(USER_API_LOCAL + '/logout', {
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