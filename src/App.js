import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;
