import React from 'react'
import UserService from "../services/UserService";
import BookUserService from "../services/BookUserService";
import RequestService from "../services/RequestService";

class PublicProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            profileUserId: this.props.location.state,
            profileUsername: '',
            profileCity: '',
            profileState: '',
            profileType: '',
            userType: '',
            userId: '',
            firstName: '',
            bookTitle: '',
            bookId: this.props.location.state.bookId,
            message: '',
            books: []
        }
        this.setFirstName = this.setFirstName.bind(this);
        this.setBookTitle = this.setBookTitle.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.createRequest = this.createRequest.bind(this);
        this.userService = UserService.instance;
        this.bookUserService = BookUserService.instance;
        this.requestService = RequestService.instance;
    }

    setProfile(profile) {
        this.setState({
            profileUsername: profile.username,
            profileCity: profile.city,
            profileState: profile.state,
            profileType: profile.type,
        });
    }

    setUser(user) {
        this.setState({
            userType: user.type,
            userId: user.id
        })
    }

    componentDidMount() {
        this.userService.findUserById(this.state.profileUserId.userId)
            .then((profile) => {this.setProfile(profile)})
            .then(() => {this.findAllBooksForUser()});
        this.userService.profile().then((user) => {this.setUser(user)});
    }

    setFirstName(event) {
        this.setState({bookTitle: event.target.value});
        console.log(this.state.firstName)
    }

    setBookTitle(event) {
        this.setState({message: event.target.value});
        console.log(this.state.bookTitle)
    }

    setMessage(event) {
        this.setState({email: event.target.value});
        console.log(this.state.message)
    }

    addBookToUser() {
        this.bookUserService.addBookToUser(this.state.userId, this.state.bookId)
            .then(() => alert('Request Sent!'))
            .then(() => {window.location.assign('/bookswap/profile');
        });
    }

    createRequest() {
        if(this.state.userId) {
            this.requestService.createRequest(this.state.bookTitle, this.state.text, this.state.profileUserId, this.state.userId)
                .then(this.addBookToUser());
        } else {
            alert('must be logged in to subimt a request');
        }
    }

    deleteUser(userId) {
        this.userService.deleteUser(userId).then(() => {
            window.location.assign('/bookswap/search');
        });
    }

    renderAdminProfile() {
        if(this.state.userType === 'admin') {
            return (
                <button
                    onClick={() => this.deleteUser(this.state.profileUserId.userId)}
                    type="button"
                    className="btn btn-danger btn-block">Delete User</button>
            )
        }
    }

    findAllBooksForUser() {
        this.bookUserService.findAllBooksForUser(this.state.profileUserId.userId).then((books) => {this.setState({books: books})});
        console.log(this.state.books);
    }

    renderProfileType() {
        if(this.state.profileType === 'giver') {
            return (
                <div>
                <h3>Request a Book</h3>
                    <form>
                        <div className="form-group">
                            <input
                                onChange={this.setFirstName}
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.setBookTitle}
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Book Title"/>
                        </div>
                        <div className="form-group">
                            <textarea
                                onChange={this.setMessage}
                                placeholder="Message"
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"></textarea>
                        </div>
                        <button
                            onClick={this.createRequest}
                            type="button"
                            className="btn btn-primary btn-block">Request Book</button>
                    </form>
                    <br/>
                <h3>Books Owned</h3>
                </div>
            )
        } else if (this.state.profileType === 'receiver') {
            return (
                <h3>Books Requested</h3>
            )
        }
    }

    renderBooks() {
        let data = null;
        if (this.state.books) {
            data = this.state.books.map(
                (book, i) => {
                    return (
                        <li className="list-group-item"
                            id="resultItem"
                            key={i}>
                            {book.title}
                        </li>
                    )});
        }
        return (
            data
        )
    }

    render() {
        return (
            <div className="container w-50 p-5">
                <h2>Profile</h2>
                <form id="publicProfile" className="border border-primary border">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Username:</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext"
                                   value={this.state.profileUsername}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">City:</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext"
                                   value={this.state.profileCity}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">State:</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                                   value={this.state.profileState}/>
                        </div>
                    </div>
                </form>
                <br/>
                {this.renderProfileType()}
                {this.renderBooks()}
                {this.renderAdminProfile()}
            </div>
        )
    }
}
export default PublicProfile;
