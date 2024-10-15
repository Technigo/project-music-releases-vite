import React from 'react';
import './styling/header.css';  
import logo from '../assets/logo.png';  

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="GrooveNest Logo" className="logo" />
    </header>
  );
};

export default Header;  
