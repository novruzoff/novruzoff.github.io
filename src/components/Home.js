import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/homepage-photo.jpg';
import MNLogo from '../assets/MN_Logo.png';
import projectsLogo from '../assets/ReLease_Logo2.png';
import instagramIcon from '../assets/instagram.png';
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
      <img src={profileImage} alt="Profile" className="profile-photo" />
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

const ProjectGridItem = ({ image, title, description }) => (
  <div className="project-grid-item">
    <img src={image} alt={title} className="project-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HomePage = () => (
  <div>
    <Home />
    
    {/* New "About Me" section */}
    <section id="about-me" className="about-section">
      <h3>ABOUT</h3>
      <p>
        Hey! My name is Murad Novruzov - I am an Azerbaijani Computer Science student at McGill University (Montreal, Canada).
      </p>
      <p>I have a passion for Software Engineering and AI, and I'm proficient in both front-end and back-end development.</p>
      <h3>EDUCATION</h3>
      <p>McGill University - Bachelor of Science in Computer Science</p>
      <h3>SKILLS</h3>
      <ul>
        <li>Languages: Python, Java, C, Bash, HTML/CSS, JavaScript, TypeScript, Assembly</li>
        <li>Frameworks: React.js, Node.js, Django, Dash (Python)</li>
        <li>Developer Tools: Git, MongoDB, Visual Studio, PyCharm, Intellij IDEA, Xcode</li>
      </ul>
    </section>

    <section className="links">
      <SectionLink
        id="projects"
        title="Projects"
      >
        <div className="project-grid">
          <ProjectGridItem
            image={projectsLogo}
            title="ReLease"
            description="A website for Canadians for lease transfer"
          />
          <ProjectGridItem
            image={MNLogo}
            title="Portfolio Website"
            description="This website! :)"
          />
        </div>
      </SectionLink>
    </section>

    <div className="footer-text">
      <p>© 2024 - Murad Novruzov</p>
      <p>Version 2.0.1</p>
    </div>
  </div>
);

export default HomePage;
