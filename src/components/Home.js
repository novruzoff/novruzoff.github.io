import React, { useEffect, useState } from 'react';
import './Home.css';
import altImage from '../assets/skimask-photo.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import mailIcon from '../assets/mail.png';
import githubIcon from '../assets/github.png';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const useMontrealTime = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const formatTime = () =>
      new Intl.DateTimeFormat('en-CA', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Toronto',
      }).format(new Date());

    setLocalTime(formatTime());
    const id = setInterval(() => setLocalTime(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return localTime;
};

const HomeHero = () => (
  <section id="home" className="home-grid panel">
    <Helmet>
      <title>Home – Murad Novruzov</title>
      <meta
        name="description"
        content="Murad Novruzov’s portfolio: Computer Science student at McGill University building Web and Software apps."
      />
      <link rel="canonical" href="https://novruzoff.github.io/" />
    </Helmet>

    <div className="hero-meta">
      <div className="pill hero-pill">novruzoff</div>
      <h1 className="hero-title">
        <span>Murad</span>
        <span>Novruzov</span>
      </h1>
      <p className="hero-subtitle">Junior Computer Science Student at McGill University</p>

      <div className="meta-grid">
        <div className="meta-card">
          <span className="label">Education</span>
          <strong>McGill University</strong>
          <small>Montreal, Canada · 2023 — 2027</small>
        </div>
        <div className="meta-card">
          <span className="label">Focus</span>
          <strong>Software & Web Development</strong>
          <small>App Development, Game Development</small>
        </div>
      </div>

      <div className="social-icons">
        <a
          href="https://instagram.com/novruzoffmurad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/novruzovmurad/"
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

    <div className="hero-visual">
      <div className="profile-shell">
        <div className="scanline" />
        <img src={altImage} alt="Profile" className="profile-photo" />
      </div>
      <div className="code-block panel">
        <div className="code-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="code-title">about.js</span>
        </div>
        <div className="code-body">
          <p>
            const student = &#123;
            <br />
            &nbsp;&nbsp;name: "<strong>Murad Novruzov</strong>",
            <br />
            &nbsp;&nbsp;location: ["Montreal, Canada", "Baku, Azerbaijan"],
            <br />
            &nbsp;&nbsp;stack: ["Software", "Web", "Full-Stack"],
            <br />
            &#125;;
          </p>
        </div>
      </div>
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
      <div className="project-card-top">
        <h3>{title}</h3>
        <span className="arrow">↗</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

const HomePage = () => {
  const localTime = useMontrealTime();

  return (
    <div className="page-shell home-page">
      <HomeHero />

    <section id="about-me" className="about-section panel">
      <div className="section-header">
        <h3 className="section-title">ABOUT</h3>
        <span className="pill">01 · Overview</span>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Hey! My name is <strong>Murad Novruzov</strong> - I am an Azerbaijani Computer Science student at <strong>McGill University</strong> in Montreal, Canada.
          </p>
          <p>
            I have a passion for <strong>Software</strong> and <strong>Web Development</strong>.
            With experience in both front-end and back-end development, I enjoy turning ideas into
            functional and visually appealing applications. I am constantly exploring new technologies
            and striving to expand my skill set to deliver impactful, forward-thinking solutions.
          </p>
        </div>
        <div className="about-facts">
          <span className="fact-pill">Remote-friendly</span>
          <span className="fact-pill">Open to internships</span>
          <span className="fact-pill">Montreal time: {localTime || '...'}</span>
        </div>
      </div>
    </section>

    <section className="timeline-grid">
      <div className="panel timeline-block">
        <div className="section-header">
          <h3 className="section-title">EDUCATION</h3>
          <span className="pill">02 · Education</span>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time-dot" />
            <div className="timeline-content">
              <p><strong>McGill University</strong></p>
              <span className="education-title">Bachelor of Science in Computer Science</span>
            </div>
            <div className="timeline-year">2023 — 2027</div>
          </div>
        </div>
      </div>

      <div className="panel timeline-block">
        <div className="section-header">
          <h3 className="section-title">EXPERIENCE</h3>
          <span className="pill">03 · Work</span>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time-dot" />
            <div className="timeline-content">
              <p><strong>True Competency</strong></p>
              <span className="experience-title">Full Stack Developer</span>
            </div>
            <div className="timeline-year">August 2025 — present</div>
          </div>
          <div className="timeline-item">
            <div className="time-dot" />
            <div className="timeline-content">
              <p><strong>SSMU (Students' Society of McGill University)</strong></p>
              <span className="experience-title">Club Website Developer</span>
            </div>
            <div className="timeline-year">July 2025 — present</div>
          </div>
          <div className="timeline-item">
            <div className="time-dot" />
            <div className="timeline-content">
              <p><strong>MindVista McGill</strong></p>
              <span className="experience-title">Web and Tech Developer</span>
            </div>
            <div className="timeline-year">November 2024 — present</div>
          </div>
          <div className="timeline-item">
            <div className="time-dot" />
            <div className="timeline-content">
              <p><strong>ARB (Azerbaijan Republic Broadcaster)</strong></p>
              <span className="experience-title">IT and Web Development Intern</span>
            </div>
            <div className="timeline-year">June 2023 — August 2023</div>
          </div>
        </div>
      </div>
    </section>

    <section className="skills-section panel">
      <div className="section-header">
        <h3 className="section-title">SKILLS</h3>
        <span className="pill">04 · Stack</span>
      </div>
      <div className="skills-grid">
        <div className="skills-card">
          <strong className="label">Languages</strong>
          <p>Python, Java, C, JavaScript, TypeScript, Swift, HTML/CSS, Bash, Assembly</p>
        </div>
        <div className="skills-card">
          <strong className="label">Software</strong>
          <p>React, Next.js, Node.js, AWS, Docker, PostgreSQL, Git, Unix, CI/CD Pipeline, Tailwind, Vercel</p>
        </div>
      </div>
    </section>

    <section id="projects" className="projects panel">
      <div className="section-header">
        <h3 className="section-title">PROJECTS</h3>
        <span className="pill">05 · Projects</span>
      </div>
      <div className="project-list">
        <ProjectCard
          title="True Competency"
          description="Competency-based education platform for interventional cardiology training."
        />
        <ProjectCard
          title="MindVista Website"
          description="mindvista.ca: Where It All Comes Together."
        />
        <ProjectCard
          title="ReLease"
          description="A website for Canadians for lease transfer"
        />
      </div>
    </section>

      <div className="footer-text">
        <p>2026 - Murad Novruzov</p>
      </div>
    </div>
  );
};

export default HomePage;
