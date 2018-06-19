import React from 'react';
import { Link } from 'react-router-dom'

document.body.style.backgroundColor = "lightgrey"
// document.body.style.backgroundImage = "url('https://www.cambridgema.gov/~/media/Images/Traffic/residentpermitphotocontest/2017/Library_Kathleen_Delsener.jpg?mw=450&mh=334')"

class Home extends React.Component {
    constructor() {
        super();
        this.state={
            title: '',
            author: '',
            results: []
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <div id="appLoginRegister">
                        <Link to={'/bookswap/login'}>
                            Login
                        </Link>
                        &nbsp;
                        &nbsp;
                        <Link to={'/bookswap/register'}>
                            Register
                        </Link>
                    </div>
                    <i className="fa fa-book fa-3x" id="appIcon"></i>
                    <h1 id="appTitle">BookSwap</h1>
                    <br/>
                    <p id="appSubtitle">Your Neighborhood Library, Without the Late Fees</p>
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    id="searchButton">Search For Books!</button>
            </div>
        )
    }
}

export default Home;