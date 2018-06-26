import React from 'react'
import UserService from "../services/UserService";
import { Link } from 'react-router-dom'

class Users extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            users: []
        }
        this.renderUsers = this.renderUsers.bind(this);
        this.userService = UserService.instance;
    }



    componentDidMount() {
        this.userService.findAllUsers()
            .then((users) => {this.setState({users: users})})
    }

    deleteUser(userId) {
        this.userService.deleteUser(userId).then(() => {
            window.location.assign('/bookswap/search');
        });
    }

    renderUsers() {
            let data = null;
            if (this.state.users) {
                data = this.state.users.map(
                    (user, i) => {
                        return (
                            <li className="list-group-item" id="resultItem"
                                key={i}>
                                <Link
                                    to={{pathname: '/bookswap/user/'+ user.id + '/profile',
                                        state: { userId: user.id}
                                    }}> {user.username}</Link>
                            </li>)
                    })}
            return (
                data
            )
    }

    render() {
        return (
            <div className="container w-50 p-5">
                <h2>Users</h2>
                <ul>
                {this.renderUsers()}
                </ul>
            </div>
        )
    }
}
export default Users;