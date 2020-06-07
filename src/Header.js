import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './Ghibli Header Logo.png'
import hamburger from './menu.png'

export default class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <Link to='/' exact="true"><img src={logo} alt="logo" className='App-logo' /></Link>
        <div className="non-home-links">
          <div className='menu'>
            <Link to='/collection/' className='menu'><span className='header-link'>Collection</span></Link>
            <Link to='/about/' className='menu'><span className='header-link'>About</span></Link>
          </div>
        </div>
      </div>
    )
  }
}
