import React from 'react';
import './Home.css';
import altImage from '../assets/skimask-photo.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import mailIcon from '../assets/mail.png';
import githubIcon from '../assets/github.png';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => (
  <section id="home">
    <Helmet>
      <title>Home – Murad Novruzov</title>
      <meta
        name="description"
        content="Murad Novruzov’s portfolio: Computer Science student at McGill University building Web and Software apps."
      />
      <link rel="canonical" href="https://novruzoff.github.io/" />
    </Helmet>
    <div className="home-content">
      <h1>Murad</h1>
      <h1>Novruzov</h1>
      <p>Computer Science Student</p>
      <div className="social-icons">
        <a
          href="https://instagram.com/novruzoffmurad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://linkedin.com/in/novruzovmurad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/novruzoff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="mailto:murad.novruzov1899@gmail.com">
          <img src={mailIcon} alt="Mail" />
        </a>
      </div>
    </div>
    <div className="home-image">
      <img src={altImage} alt="Profile" className="profile-photo" />
    </div>
  </section>
);

const ProjectCard = ({ title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const HomePage = () => (
  <div>
    <Home />
    
    {/* About Me Section */}
    <section id="about-me" className="about-section">
      <h3>ABOUT</h3>
      <p>
        Hey! My name is <strong>Murad Novruzov</strong> - I am an Azerbaijani Computer Science student at <strong>McGill University</strong> in Montreal, Canada.
      </p>
      <br />
      <p>
        I have a passion for <strong>Software</strong> and <strong>Web Development</strong>.
        With experience in both front-end and back-end development, I enjoy turning ideas into
        functional and visually appealing applications. I’m constantly exploring new technologies
        and striving to expand my skill set to deliver impactful, forward-thinking solutions.
      </p>
      <br />
      <p>Right now, I am learning <strong>Swift</strong>, a programming language designed by Apple for iOS and MacOS.</p>

      <h3>EDUCATION</h3>
      <div className="education-entry">
        <div>
          <p><strong>McGill University</strong></p>
          <span className="education-title">Bachelor of Science in Computer Science</span>
        </div>
        <div className="education-year">2023 — 2027</div>
      </div>

      <h3>EXPERIENCE</h3>
      <div className="experience-section">
        <div className="experience-entry">
          <div className="experience-info">
            <p><strong>MindVista McGill</strong></p>
            <span className="experience-title">Web and Tech Developer</span>
          </div>
          <div className="experience-year">November 2024 — present</div>
        </div>
        <div className="experience-entry">
          <div className="experience-info">
            <p><strong>ARB (Azerbaijan Republic Broadcaster)</strong></p>
            <span className="experience-title">IT and Web Development Intern</span>
          </div>
          <div className="experience-year">June 2023 — August 2023</div>
        </div>
      </div>

      <h3>SKILLS</h3>
      <ul>
        <li><strong>Languages</strong>: Python, Java, C++, C#, C, JavaScript, TypeScript, Swift, GoLang, HTML/CSS, Bash, Assembly, OCaml</li>
        <li><strong>Software</strong>: MySQL, React.js, Node.js, Next.js, Django, Tailwind, Vercel, Vite, Unity, MongoDB, Dash (Python)</li>
      </ul>
    </section>

    {/* Projects Section - Compact Horizontal Card List */}
    <section id="projects" className="projects">
      <h3>PROJECTS</h3>
      <div className="project-list">
        <ProjectCard
          title="MindVista Website"
          description="mindvista.ca: Where It All Comes Together."
        />
        <ProjectCard
          title="ReLease"
          description="A website for Canadians for lease transfer"
        />
        <ProjectCard
          title="Portfolio Website"
          description="This website! :)"
        />
      </div>
    </section>

    <div className="footer-text">
      <p>2025 - Murad Novruzov</p>
    </div>
  </div>
);

export default HomePage;
