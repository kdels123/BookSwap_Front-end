import React from 'react'
import UserService from "../services/UserService";

class PublicProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            profileUserId: this.props.location.state,
            profileUsername: '',
            profileCity: '',
            profileState: '',
            userType: ''
        }
        this.userService = UserService.instance;
    }

    setProfile(profile) {
        this.setState({
            profileUsername: profile.username,
            profileCity: profile.city,
            profileState: profile.state
        });
    }

    setUser(user) {
        this.setState({
            userType: user.userType
        })
    }

    componentDidMount() {
        this.userService.findUserById(this.state.profileUserId.userId).then((profile) => {this.setProfile(profile)});
        this.userService.profile().then((user) => {this.setUser(user)});
        this.setState(this.state);
    }

    renderAdminProfile() {
        if(this.state.userType === 'admin') {
            return (
                
            )
        }

    }

    render() {
        return (
            <div className="container w-75 p-3">
                <h1 className>Profile: {this.state.profileUsername}</h1>
                <p>{this.state.profileCity}, {this.state.profileState}</p>
                <button className="btn">Contact</button>
                <h2>Books You Currently Own</h2>
                <h2>Books You Requested</h2>

            </div>
        )
    }
}
export default PublicProfile;
