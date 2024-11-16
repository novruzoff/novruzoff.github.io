import React from 'react';
import './Home.css';
import profileImage from '../assets/homepage-photo.jpg';
import MNLogo from '../assets/MN_Logo.png';
import projectsLogo from '../assets/ReLease_Logo2.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import mailIcon from '../assets/mail.png';
import githubIcon from '../assets/github.png';
import { useNavigate } from 'react-router-dom';

const Home = () => (
  <section id="home">
    <div className="home-content">
      <h1>Murad</h1>
      <h1>Novruzov</h1>
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

const ProjectGridItem = ({ image, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <div className="project-grid-item" onClick={handleClick}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt={title} className="project-image" />
          </div>
          <div className="flip-card-back">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => (
  <div>
    <Home />
    
    {/* New "About Me" section */}
    <section id="about-me" className="about-section">
      <h3>ABOUT</h3>
      <p>
        Hey! My name is <strong>Murad Novruzov</strong> - I am an Azerbaijani Computer Science student at <strong>McGill University</strong> (Montreal, Canada).
      </p>
      <p>I have a passion for <strong>Software Engineering</strong> and <strong>AI</strong>, and I'm proficient in both front-end and back-end development.</p>

      <h3>EDUCATION</h3>
      <div className="education-entry">
        <div>
          <p><strong>McGill University</strong></p>
          <span className="education-title">Bachelor of Science in Computer Science</span>
        </div>
        <div className="education-year">2023 — 2027</div>
      </div>

      <h3>EXPERIENCE</h3>
      <div className="experience-entry">
        <div>
          <p><strong>ARB (Azerbaijan Republic Broadcaster)</strong></p>
          <span className="experience-title">IT and Web Development Intern</span>
        </div>
        <div className="experience-year">June 2023 — August 2023</div>
      </div>

      <h3>SKILLS</h3>
      <ul>
        <li><strong>Languages</strong>: Python, Java, C, Bash, HTML/CSS, JavaScript, TypeScript, Assembly</li>
        <li><strong>Frameworks</strong>: React.js, Node.js, Django, Dash (Python)</li>
        <li><strong>Developer Tools</strong>: Git, MongoDB, Visual Studio, PyCharm, Intellij IDEA, Xcode</li>
      </ul>
    </section>

    <section className="links">
      <div className="section-link">
        <h2>PROJECTS</h2>
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
      </div>
    </section>


    <div className="footer-text">
      <p>2024 - Murad Novruzov</p>
      <p>Version 2.1.2</p>
    </div>
  </div>
);

export default HomePage;
