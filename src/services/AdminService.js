// const USE_API_LOCAL = 'http://localhost:8080/api/user';
const URL = 'https://cs5610-project-kdelsener.herokuapp.com/api/user';

let _singleton = Symbol();
export default class AdminService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    createAdmin(user) {
        return fetch(URL + '/admin',
            {
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                credentials: 'same-origin',
            }).then(function (response)
        {
            return response.json(); }).catch(() => alert('Username already exists, please try again'));
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new AdminService(_singleton);
        return this[_singleton]
    }
}