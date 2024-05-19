import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <section id="hero">
        <div className="hero-content">
          <h1>Murad Novruzov</h1>
          <p>Full-Stack Developer</p>
          <p>I am a student at McGill University, studying Computer Science.</p>
          <button className="btn-cv">Download CV</button>
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>Introduce yourself here. Mention your interests, background, and any other information you want to share.</p>
      </section>
      <Project />
    </main>
    <Footer />
  </div>
);

export default App;
