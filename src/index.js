import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './IMG_5036.jpg'
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './containers/app'
import Login from './containers/login'
import Register from './containers/register'
import Results from './containers/Results'


ReactDOM.render(
    <Router>
        <div className="container-fluid">
            <Route path="/bookswap/search" component={App}/>
            <Route path="/bookswap/login" component={Login}/>
            <Route path="/bookswap/register" component={Register}/>
            <Route path="/bookswap/search/results" component={Results}/>
        </div>
    </Router>,
    document.getElementById('root')
);
