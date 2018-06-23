import React from 'react'
import { Link } from 'react-router-dom'
import GiverService from '../services/GiverService'
import ReceiverService from '../services/ReceiverService'
import AdminService from '../services/AdminService'



class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            verify: '',
            type: '',
        };

        this.setUsername = this.setUsername.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setVerify = this.setVerify.bind(this);
        this.setType = this.setType.bind(this);
        this.createUser = this.createUser.bind(this);
        this.giverService = GiverService.instance;
        this.receiverService = ReceiverService.instance;
        this.adminService = AdminService.instance;
    }

    setUsername(event) {
        this.setState({username: event.target.value});
        console.log(this.state.username)
    }

    setEmail(event) {
        this.setState({email: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
        console.log(this.state.password)
    }

    setVerify(event) {
        this.setState({verify: event.target.value});
    }

    setType(event) {
        this.setState({type: event.target.id})
        console.log(this.state.type);
    }

    createUser() {
        if (this.state) {
            if(this.state.password !== this.state.verify) {
                alert('Passswords to not match, please try again')
            }
            else if (this.state.type === 'giver') {
                this.giverService.createGiver(this.state)
                    .then(() => {
                    window.location.assign('/bookswap/login');
                });
            }
            else if (this.state.type === 'receiver') {
                this.receiverService.createReceiver(this.state)
                    .then(() => {
                    window.location.assign('/bookswap/login');
                });
            }
            else if (this.state.type === 'admin') {
                this.adminService.createAdmin(this.state)
                    .then(() => {
                    window.location.assign('/bookswap/login');
                });
            }
            else {
                alert('Please select a user type')
            }
        }
    }

    render() {
        return (
            <div className="container w-75 p-3" id="loginLayout">
                <h1>Register</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input
                                onChange={this.setUsername}
                                type="text"
                                className="form-control"
                                id="inputUsername"
                                placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                onChange={this.setEmail}
                                type="text"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">User (select one)</label>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input
                                    onChange={this.setType}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="giver"
                                />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Giver</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    onChange={this.setType}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="receiver"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Receiver</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    onChange={this.setType}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="admin"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Admin</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input
                                onChange={this.setPassword}
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Verify Password</label>
                        <div className="col-sm-10">
                            <input
                                onChange={this.setVerify}
                                type="password"
                                className="form-control"
                                id="inputVerifyPassword"
                                placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={this.createUser}
                                type="button"
                                className="btn btn-primary btn-block">Register</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" style={{fontSize: 13.5}}>Already a Member?</label>
                        <div className="col-sm-10">
                            <Link
                                className="btn btn-secondary btn-block mb-2"
                                to={{pathname: '/bookswap/login'}}>Login</Link>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default Register;