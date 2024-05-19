import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import profileImage from './assets/MN_Logo.png'; // Add a profile image

const App = () => (
  <div className="App">
    <Header />
    <main>
      <section id="home">
        <div className="home-content">
          <h1>Murad Novruzov</h1>
          <p>Full-Stack Developer</p>
          <button className="btn-cv">Download CV</button>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>My name is Murad Novruzov, from Azerbaijan. 
          I am a student at McGill University, majoring in Computer Science and minoring in Management.
          I am interested in  Software Engineering and Artificial Intelligence.
          My skills involve both front-end and back-end knowledge.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <Project />
      </section>
    </main>
  </div>
);

export default App;
