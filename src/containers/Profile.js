import React from 'react'
import UserService from "../services/UserService";


class Profile extends React.Component {

    constructor() {
        super()
        this.state = {
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            state: ''
        };

        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setsState = this.setsState.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.setUser = this.setUser.bind(this);
        this.userService = UserService.instance;
    }

    setUser(user) {
        this.setState({
            userId: user.id,
            fistName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
            city: user.city,
            state: user.state,
        });
    }

    componentDidMount() {
        this.userService.profile().then((user) => {this.setUser(user)});
    }

    setFirstName(event) {
        this.setState({firstName: event.target.value});
        console.log(this.state.firstName)
    }

    setLastName(event) {
        this.setState({lastName: event.target.value});
        console.log(this.state.lastName)
    }

    setEmail(event) {
        this.setState({email: event.target.value});
        console.log(this.state.email)
    }

    setAddress(event) {
        this.setState({address: event.target.value});
        console.log(this.state.address)
    }

    setCity(event) {
        this.setState({city: event.target.value});
        console.log(this.state.city)
    }

    setsState(event) {
        this.setState({state: event.target.value});
        console.log(this.state.state)
    }

    updateUser() {
        this.userService.updateUser(this.state)
            .then(() =>  this.userService.profile()
                .then((user) => {this.setUser(user)}));
    }

    render() {
        return (
            <div className="container w-75 p-3">
                <h1>Profile</h1>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.firstName}
                                onChange={this.setFirstName}
                                type="text"
                                className="form-control"
                                id="inputUsernameProfile"
                                placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.lastName}
                                onChange={this.setLastName}
                                type="text"
                                className="form-control"
                                id="inputEmailProfile"
                                placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.email}
                                onChange={this.setEmail}
                                type="text"
                                className="form-control"
                                id="inputPasswordProfile"
                                placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.address}
                                onChange={this.setAddress}
                                type="text"
                                className="form-control"
                                id="inputAddressProfile"
                                placeholder="Address"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputCityProfile" className="col-sm-2 col-form-label">City</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.city}
                                onChange={this.setCity}
                                type="text"
                                className="form-control"
                                id="inputCityProfile"
                                placeholder="City"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputState" className="col-sm-2 col-form-label">State</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.state}
                                onChange={this.setsState}
                                type="text"
                                className="form-control"
                                id="inputStateProfile"
                                placeholder="State"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={this.updateUser}
                                type="button"
                                className="btn btn-primary btn-block">Update</button>
                        </div>
                    </div>
                </form>
                <h2>Books You Currently Own</h2>
                <h2>Books You Requested</h2>
            </div>
        )
    }
}
export default Profile;
