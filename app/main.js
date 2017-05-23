import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

 const deepstream = require('deepstream.io-client-js');
 const DeepstreamMixin = require('deepstream.io-tools-react');
 const client = deepstream('localhost:6020').login({
  username: "myemail@sth.com",
   password: "somepassword"
 }, function (x) {
    console.log(x);
 });

ReactDOM.render(<App />, document.getElementById('root'))
