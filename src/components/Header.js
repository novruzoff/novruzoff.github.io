// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/MN_Logo.png';

const Header = () => (
  <header>
    <div className="logo">
      <a href="#home"><img src={logo} alt="Murad Novruzov Logo" /></a>
    </div>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
