import React from 'react'
import { Link } from 'react-router-dom'
import UserService from "../services/UserService";

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        };
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
        this.userService = UserService.instance;
    }

    setUsername(event) {
        this.setState({username: event.target.value});
        console.log(this.state.username)
    }

    setPassword(event) {
        this.setState({password: event.target.value});
        console.log(this.state.password)
    }

    login() {
        console.log(this.state.username);
        console.log(this.state.password);
        if (this.state) {
            this.userService.login(this.state.username, this.state.password)
                .then(() => {
                    window.location.assign('/bookswap/profile');
                });
        }
    }

    render() {
        return (
            <div className="container" id="loginLayout">
            <h1>Login</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input
                                onChange={this.setUsername}
                                type="text"
                                className="form-control"
                                placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input
                                onChange={this.setPassword}
                                type="password"
                                className="form-control"
                                placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={this.login}
                                type="button"
                                className="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Not yet a Member?</label>
                        <div className="col-sm-10">
                            <Link
                                className="btn btn-secondary btn-block mb-2"
                                to={{pathname: '/bookswap/register'}}>Register</Link>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login;