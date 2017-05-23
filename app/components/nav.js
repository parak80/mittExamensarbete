import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <div className="header-cont">
      
        <ul>
          <li >
            <Link to='/' className="header">Lists</Link>
          </li>
          <li >
            <Link to='/sendmessage' className="header">Send message</Link>
          </li>
          <li >
            <Link to='/utkorg' className="header">Utkorg</Link>
          </li>
         <li >
            <Link to='/login' className="loginbtn">Login</Link>
          </li>
        
          <li >
            <Link to='/inkorg' className="header">Inkorg</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav


 