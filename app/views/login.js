import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const deepstream = require('deepstream.io-client-js');
 const DeepstreamMixin = require('deepstream.io-tools-react');
 const client = deepstream('localhost:6020').login({
  username: "parisa.carlborg@icentrex.com",
   password: "08kk2fHR"
 }, function (x) {
    console.log(x);
 });

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
 
  handleSubmit(event) {

    alert('login form submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginform">
	      <h1 className="myh1">Please login</h1>
	      <form  onSubmit={this.handleSubmit}>
	        <label className="labelName">
	          Name:
	          <input type="text" className="nameInput" value={this.state.value} onChange={this.handleChange} placeholder="write your username here..."/>
	        </label>
	        <label className="labelName">
	          Password:
	          <input type="text" className="passwordInput" placeholder="write your password here..."/>
	        </label>
        <button className="submitLoginbtn" type="submit" value="Submit">Submit
	      <Link to="/" className="LoginbtnRoute"/>
        </button>
         
        </form>
      </div>
    );
  }
}

// class ShowPassword extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       type: 'input',
//       score: 'null'
//     }
//     this.showHide = this.showHide.bind(this);
//     this.passwordStrength = this.passwordStrength.bind(this);
//   }
  
//   showHide(e){
//     e.preventDefault();
//     e.stopPropagation();
//     this.setState({
//       type: this.state.type === 'input' ? 'password' : 'input'
//     })  
//   }
  
//   passwordStrength(e){
//     if(e.target.value === ''){
//       this.setState({
//         score: 'null'
//       })
//     }
//     else{
//       var pw = zxcvbn(e.target.value);
//       this.setState({
//         score: pw.score
//       });      
//     }

//   }
  
//   render(){
//     return(
//       <label className="password">Password
//       <input type={this.state.type} className="password__input" onChange={this.passwordStrength}/>
//       <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
//       <span className="password__strength" data-score={this.state.score} />
//       </label>
//     )
//   }
// }

export default Login