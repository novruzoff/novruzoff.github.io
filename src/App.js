import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Projects = lazy(() => import('./components/Projects'));

const App = () => {
  useEffect(() => {
    // Create the glowing effect element
    const glowElement = document.createElement('div');
    glowElement.classList.add('glow');
    document.body.appendChild(glowElement);

    // Track mouse movement and update glow position, accounting for scroll
    const handleMouseMove = (e) => {
      glowElement.style.top = `${e.pageY}px`; // pageY accounts for scrolling
      glowElement.style.left = `${e.pageX}px`; // pageX accounts for scrolling
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(glowElement);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
