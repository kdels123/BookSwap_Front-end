// const BOOK_USER_API_LOCAL = 'http://localhost:8080/api/giver/GID/receiver/RID';
const URL = 'https://cs5610-project-kdelsener.herokuapp.com/api/giver/GID/receiver/RID';


let _singleton = Symbol();
export default class RequestService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    createRequest(bookTitle, text, giverId, receiverId) {
        return fetch(URL.replace('GID', giverId).replace('RID', receiverId), {
            method: 'post',
            body: JSON.stringify({bookTitle: bookTitle, text: text, giverId: giverId, receiverId: receiverId}),
            headers: {
                'content-type': 'application/json',
            }}).then(function (response) {
            return response.json()
        });
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new RequestService(_singleton);
        return this[_singleton]
    }
}