// const USE_API_LOCAL = 'http://localhost:8080/api/user';
const URL = 'https://cs5610-project-kdelsener.herokuapp.com/api/user';

let _singleton = Symbol();
export default class GiverService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    createGiver(user) {
        return fetch(URL + '/giver',
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
            this[_singleton] = new GiverService(_singleton);
        return this[_singleton]
    }
}