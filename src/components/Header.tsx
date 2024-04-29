import React from 'react';
import '../style/Header.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>NEWS S.A.</h1>
    </header>
  )
}

export default Header