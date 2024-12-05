import React from 'react'
import './Navbar.css'
import unlimited from '../../assets/unlimited.png'
import burger from '../../assets/burger.png'

const Navbar = () => {
  return (
  <div className="nav-container">

    <div className="nav-left">
        <img src={unlimited} alt="logo" />
        <a href="#">Services</a>
        <a href="#">Hosting</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
    </div>

    <div className="nav-right">
        <a href="#">Get Started</a>
       
    </div>

    <div className="menu">
        <img src={burger} alt="menu" />
    </div>
    
  </div>
  )
}

export default Navbar