import React from 'react'
import { Link } from 'react-router-dom'


class Login extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div class="container" id="loginLayout">
            <h1>Login</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword" placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type="button" className="btn btn-primary btn-block">Login</button>
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