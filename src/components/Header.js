import React from 'react';
import './Header.css';
import logo from '../assets/MN_Logo.png';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Murad Novruzov Logo" />
    </div>
    <nav>
      <a href="#hero">Home</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
