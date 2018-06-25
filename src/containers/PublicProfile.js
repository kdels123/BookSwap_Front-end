import React from 'react'
import UserService from "../services/UserService";

class PublicProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            userId: this.props.location.state,
            username: '',
            userCity: '',
            userState: ''
        }
        this.userService = UserService.instance;
    }

    setUser(user) {
        this.setState({
            username: user.username,
            userCity: user.city,
            userState: user.state
        });
    }

    componentDidMount() {
        this.userService.findUserById(this.state.userId.userId).then((user) => {this.setUser(user)});
        this.setState(this.state);
    }

    render() {
        return (
            <div className="container w-75 p-3">
                <h1 className>Profile: {this.state.username}</h1>
                <p>{this.state.userCity}, {this.state.userState}</p>
                <button className="btn">Contact</button>
                <h2>Books You Currently Own</h2>
                <h2>Books You Requested</h2>
            </div>
        )
    }
}
export default PublicProfile;
