import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/MN_Logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Murad Novruzov Logo" /></Link>
      </div>
      <nav>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
