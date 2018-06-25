import React from 'react';
import { Link } from 'react-router-dom'
import UserService from "../services/UserService";

document.body.style.backgroundColor = "lightgrey"
// document.body.style.backgroundImage = "url('https://www.cambridgema.gov/~/media/Images/Traffic/residentpermitphotocontest/2017/Library_Kathleen_Delsener.jpg?mw=450&mh=334')"

class Home extends React.Component {

    constructor() {
        super()

        this.logout = this.logout.bind(this);
        this.userService = UserService.instance;
    }

    logout() {
        this.userService.logout().then(() => {
            window.location.assign('/bookswap/home');
        });
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1 id="homeTitle">
                        BookSwap
                        <i className="fa fa-book fa-2x d-inline-block align-top"></i>
                        </h1>
                    <br/>
                    <p id="homeSubtitle">Your Neighborhood Library, Without the Late Fees</p>
                </div>


                <form id="searchButton">
                    <div className="form-group" >
                        <Link
                            className="btn btn-block btn-primary mb-2"
                            to={{pathname: '/bookswap/login'}}>Login</Link>
                    </div>
                    <div className="form-group">
                        <Link
                            className="btn btn-block btn-primary mb-2"
                            to={{pathname: '/bookswap/register'}}>Register</Link>
                    </div>

                    <div className="form-group">
                        <Link
                            className="btn btn-primary mb-2"
                            to={{pathname: '/bookswap/search'}}>Search For Books!</Link>
                    </div>
                    <div className="form-group">
                        <button
                            onClick={this.logout}
                            className="btn btn-danger btn-block mb-2">Logout</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Home;