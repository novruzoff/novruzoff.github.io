// src/components/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/MN_Logo.png';

const Home = () => (
  <section id="home">
    <div className="home-content">
      <h1>Murad Novruzov</h1>
      <p>Full-Stack Developer</p>
      <a href="/Murad_Novruzov_CV.pdf" className="btn-cv" download>Download CV</a>
    </div>
    <div className="home-image">
      <img src={profileImage} alt="Profile" />
    </div>
  </section>
);

const SectionLink = ({ id, title, description }) => (
  <div className="section-link">
    <h2>{title}</h2>
    <p>{description}</p>
    <a className="btn-more" href={`/${id}`}>
      Learn More
    </a>
  </div>
);

const HomePage = () => (
  <div>
    <Home />
    <section className="links">
      <SectionLink
        id="about"
        title="About me"
        description="My name is Murad Novruzov, from Azerbaijan. I am a student at McGill University, majoring in Computer Science and minoring in Management. I am interested in Software Engineering and Artificial Intelligence. My skills involve both front-end and back-end knowledge."
      />
      <SectionLink
        id="projects"
        title="Projects"
        description="Learn about my projects and contributions."
      />
    </section>
    <div className="footer-text">
      <p>© 2024 - Murad Novruzov</p>
    </div>
  </div>
);

export default HomePage;
