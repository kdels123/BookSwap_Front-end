import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './containers/app'


ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <App/>
    </div>,
    document.getElementById('root')
);
