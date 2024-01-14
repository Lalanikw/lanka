import {Link} from 'react-router-dom';
import React, { Component} from 'react'
import logo from '../images/board.jpg'
import './Nav.css'

class Header extends Component { 

  state = { clicked: false };

  handleClick = () => {
    this.setState ({clicked: !this.state.clicked})
  }

  render (){
  
  return (
    <nav className='nav'>
          <div className='flex gap-3'>
            <img src={logo} alt='logo' width={75} height={50} />
            <h2>The Perl of the Indian Ocean</h2>
          </div>

          <div>
        <ul id='topnav'
          className={this.state.clicked ? 
        "#topnav active" : "#topnav hidden"}>
              <li>Home</li>
              <li>Places</li>
              <li>ContactUs</li>
            </ul>
          </div>
          
          <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className= {this.state.clicked ?
        "fas fa-times" : "fas fa-bars"}></i>
      </div>
      </nav>
  )
}
}

export default Header


