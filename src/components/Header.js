import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/MN_Logo.png';

const Header = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // If scroll down, hide the header
      setShowHeader(false);
    } else {
      // If scroll up, show the header
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header className={showHeader ? 'visible' : 'hidden'}>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Murad Novruzov Logo" /></Link>
      </div>
      <nav>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <a href="https://raw.githubusercontent.com/novruzoff/novruzoff.github.io/master/public/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>
    </header>
  );
};

export default Header;
