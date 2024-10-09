import React from 'react';
import cart from '../Images/Cart.png'
import logo from '../Images/Laptop_Logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
    <div className='container'>
        <div className='logo-heading-container'>
        <img className='logo' src={logo} alt='Logo'/>
        <h1>Laptop Hub</h1>
        </div>

        <img className='cart' src={cart} alt='Cart'/>

    </div>
    </header>
  )
}

export default Header