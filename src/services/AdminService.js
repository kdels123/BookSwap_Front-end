const USE_API_LOCAL = 'http://localhost:8080/api/user';
// const USER_API_REMOTE = 'https://webdev-summer1-2018-delsener.herokuapp.com/api/course/CID/module';

let _singleton = Symbol();
export default class AdminService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    createAdmin(user) {
        return fetch(USE_API_LOCAL + '/admin',
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