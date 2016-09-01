import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import {Router, Route, browserHistory} from 'react-router'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/About" component={About} />
  </Router>
),document.getElementById('root')
);
