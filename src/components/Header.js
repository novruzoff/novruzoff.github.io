// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/MN_Logo.png';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/"><img src={logo} alt="Murad Novruzov Logo" /></Link>
    </div>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
