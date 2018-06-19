import React from 'react';
import { Link } from 'react-router-dom'

document.body.style.backgroundColor = "lightgrey"
// document.body.style.backgroundImage = "url('https://www.cambridgema.gov/~/media/Images/Traffic/residentpermitphotocontest/2017/Library_Kathleen_Delsener.jpg?mw=450&mh=334')"

class App extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <span>

                    <Link
                        to={{pathname: '/bookswap/home'}}
                        className="navbar-brand">
                        BookSwap
                        <i className="fa fa-book fa-2x d-inline-block align-top" id="appIcon2"></i>

                    </Link>

                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <span className="navbar-text">
                            <Link
                                className="nav-link"
                                to={{pathname: '/bookswap/profile'}}>Profile</Link>
                        </span>
                        <span className="navbar-text">
                            <Link
                                className="nav-link"
                                to={{pathname: '/bookswap/search'}}>Search</Link>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default App;