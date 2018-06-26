import React from "react";
import UserService from "../services/UserService";
import BookUserService from "../services/BookUserService";
import { Link } from 'react-router-dom'

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookId: this.props.location.state.bookId,
            userId: '',
            users: []
        };
        this.userService = UserService.instance;
        this.bookUserService = BookUserService.instance;
    }

    setUser(user) {
        this.setState({
            userId: user.id,
        });
    }

    componentDidMount() {
        this.userService.profile().then((user) => {this.setUser(user)}).then(() => this.findAllUsersForBook(this.state.userId))
    }

    findAllUsersForBook() {
        this.bookUserService.findAllUsersForBook(this.state.bookId).then((users) => {this.setState({users: users})});
        console.log(this.state.books);
    }

    renderListOfUsers() {
        let data = null;
        if (this.state.users) {
            data = this.state.users.map(
                (user, i) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between align-items-center"
                            id="resultItem"
                            key={i}>
                            {user.username} [{user.city}, {user.state}]

                            <Link to={{pathname: '/bookswap/user/'+ user.id + '/profile',
                                state: { userId: user.id, bookId: this.state.bookId}}}
                                // onClick={() => this.addBookToUser()}
                                className="btn btn-success float-right">Request</Link>
                        </li>
                    )});
        }
        return (
            data
        )
    }


    render() {
        return (
            <div>
            <h1>Users Who Own Book</h1>
                <ul className="list-group">
                {this.renderListOfUsers()}
                </ul>
            </div>
        )
    }
}
export default Request;