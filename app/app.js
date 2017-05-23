import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import NameForm from './views/home.js';
import SendingMessage from './views/sendmessage.js';
import Nav from './components/nav.js';
import ContactList from './views/utkorg.js';
import Login from './views/login.js';
import css from 'style-loader';

//var css = require("css!./liststyle.css");
class App extends Component {
  render() {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={NameForm} />
            <Route path='/sendmessage' component={SendingMessage} />
            <Route path='/utkorg' component={ContactList} />
            <Route path='/login' component={Login} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
    )
  }
}
  // <Route path='/home' component={NameForm} />
const NotFound = () => <h3 className="myError">404... Not found</h3>
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

export default App
