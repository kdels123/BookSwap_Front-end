import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './IMG_5036.jpg'
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './containers/App'
import Home from './containers/Home'
import Search from './containers/Search'
import Profile from './containers/Profile'
import Login from './containers/Login'
import Register from './containers/Register'
import Results from './containers/Results'
import ResultDetail from './containers/ResultDetail'


ReactDOM.render(
    <Router>
        <div className="container-fluid">
            <Route path="/bookswap/" component={App}/>
            <Route path="/bookswap/home" component={Home}/>
            <Route path="/bookswap/search" component={Search}/>
            <Route path="/bookswap/profile" component={Profile}/>
            <Route path="/bookswap/login" component={Login}/>
            <Route path="/bookswap/register" component={Register}/>
            <Route path="/bookswap/search/results" component={Results}/>
            <Route path="/bookswap/results/book" component={ResultDetail}/>
        </div>
    </Router>,
    document.getElementById('root')
);
