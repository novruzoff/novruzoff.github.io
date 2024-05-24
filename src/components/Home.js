import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/MN_Logo.png';
import projectsLogo from '../assets/ReLease_Logo.png'; // Add this line
import instagramIcon from '../assets/instagram.png'; // Add the icons
import linkedinIcon from '../assets/linkedin.png';
import mailIcon from '../assets/mail.png';
import githubIcon from '../assets/github.png';

const Home = () => (
  <section id="home">
    <div className="home-content">
      <h1>Murad Novruzov</h1>
      <p>Computer Science Student</p>
      <div className="social-icons">
        <a href="https://instagram.com/novruzoffmurad" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://linkedin.com/in/novruzovmurad" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/novruzoff" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="mailto:murad.novruzov1899@gmail.com">
          <img src={mailIcon} alt="Mail" />
        </a>
      </div>
    </div>
    <div className="home-image">
      <img src={profileImage} alt="Profile" />
    </div>
  </section>
);

const SectionLink = ({ id, title, description, children }) => (
  <div className="section-link">
    <h2>{title}</h2>
    <p>{description}</p>
    {children}
    <Link className="btn-more" to={`/${id}`}>
      Learn More
    </Link>
  </div>
);

const HomePage = () => (
  <div>
    <Home />
    <section className="links">
      <SectionLink
        id="about"
        title="About me"
        description="My name is Murad Novruzov - an Azerbaijani Computer Science student at McGill University based in Montreal, Canada. I have a passion for Software Engineering and AI, proficient in both front-end and back-end development."
      />
      <SectionLink
        id="projects"
        title="Projects"
      >
        <div className="projects-content">
          <img src={projectsLogo} alt="Projects Logo" className="projects-logo" />
          <ul>
            <li><strong>ReLease</strong> - Website for Canadians to transfer their lease.</li>
          </ul>
        </div>
      </SectionLink>
    </section>
    <div className="footer-text">
      <p>© 2024 - Murad Novruzov</p>
    </div>
  </div>
);

export default HomePage;
