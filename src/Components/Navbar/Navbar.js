import React from 'react'
import logo from  '../../logo.svg'
import './navbar.scss'

const Navbar = (props) => {
  return (
    <nav className="navbar">
    <img src={logo} alt="City tours" />
    <ul className="navlinks">
    <li><a href="/" className="navlink" > Home </a></li>
    <li><a href="/" className="navlink" > About </a></li>
    <li><a href="/" className="navlink active"  > Tours </a></li>
    </ul>
    </nav>
  )
}

export default Navbar
