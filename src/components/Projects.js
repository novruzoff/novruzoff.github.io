import React from 'react';
import './Projects.css';
import projectImage from '../assets/ReLease_Logo.png';
import ReLeasePic1 from '../assets/ReLease_pic1.png';
import ReLeasePic2 from '../assets/ReLease_pic2.png';
import ReLeasePic3 from '../assets/ReLease_pic3.png';
import githubLogo from '../assets/github.png';
import devpostLogo from '../assets/devpost.png';
import MNLogo from '../assets/MN_Logo.png';
import MindvistaLogo from '../assets/Mindvista_Logo.png';
import TCLogo from '../assets/tc_logo.png';
import WebLogo from '../assets/web.png';
import { Helmet } from 'react-helmet-async';

const Projects = () => (
  <main className="page-shell projects-page">
    <Helmet>
      <title>Projects – Murad Novruzov</title>
      <meta
        name="description"
        content="Murad Novruzov’s Projects: ReLease, Portfolio Website, Mindvista Website."
      />
      <link rel="canonical" href="https://novruzoff.github.io/projects" />
    </Helmet>

    <section className="project-stack">
      <article className="project-card-lg panel">
        <div className="project-heading">
          <div className="project-meta">
            <span className="pill">truecompetency.com</span>
            <h3>True Competency</h3>
          </div>
          <img src={TCLogo} alt="True Competency Website Logo" className="project-logo small" />
        </div>
        <div className="project-body">
          <div className="project-copy">
            <p>
              True Competency is a competency-based education and evaluation platform designed for interventional cardiology training. First full release supports trainees, instructors, and committee members involved in defining, tracking, and reviewing procedural competencies.
            </p>
            <p>
              The platform provides role-based dashboards tailored to trainees, instructors, and committees, enabling structured procedure logging, progress tracking, testing, and competency review workflows. It includes a complete IVUS competency framework with standardized competencies, difficulty levels, tagging, and searchable views, as well as an integrated MCQ-based assessment system with auto-grading and competency completion. Built with a modern clinical UI, the system emphasizes clarity, usability, and reliability in high-stakes training environments.
            </p>
            <p>
              The platform is built using Next.js 15, TypeScript, Tailwind CSS, Supabase (PostgreSQL, Auth, RLS), and Vercel, with a focus on scalability, security, and clean user experience.
            </p>
          </div>
          <div className="project-links">
            <a href="https://truecompetency.com" target="_blank" rel="noopener noreferrer" className="link-chip">
              <img src={WebLogo} alt="Website" className="link-logo" />
              <span>Website</span>
            </a>
            <a href="https://github.com/True-Competency/truecompetency.com" target="_blank" rel="noopener noreferrer" className="link-chip">
              <img src={githubLogo} alt="GitHub" className="link-logo" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>

      <article className="project-card-lg panel">
        <div className="project-heading">
          <div className="project-meta">
            <span className="pill">mindvista.ca</span>
            <h3>Mindvista Website</h3>
          </div>
          <img src={MindvistaLogo} alt="MindVista Website Logo" className="project-logo small" />
        </div>
        <div className="project-body">
          <div className="project-copy">
            <p>
              mindvista.ca has been successfully migrated from WordPress to a cutting-edge tech stack featuring Next.js and Payload CMS. This transition significantly enhances our website's performance, responsiveness, SEO, and developer experience. With improved stability, scalability, and maintainability, we can now deliver content more efficiently and introduce new features with greater flexibility.
            </p>
            <p>
              • Front-end Framework: We have adopted Next.js, leveraging its powerful features to enhance website performance and search engine optimization. This shift also improves the developer experience by streamlining the code structure, reducing complexity, and enabling faster iterations and deployments.
            </p>
            <p>
              • Back-end / Content Management: We have replaced WordPress with Payload CMS, a lightweight and highly customizable content management system. Unlike traditional CMS platforms, Payload allows us to build exactly what we need without excess features, improving efficiency and usability.
            </p>
          </div>
          <div className="project-links">
            <a href="https://mindvista.ca" target="_blank" rel="noopener noreferrer" className="link-chip">
              <img src={WebLogo} alt="Website" className="link-logo" />
              <span>Website</span>
            </a>
            <a href="https://github.com/MindVista/website" target="_blank" rel="noopener noreferrer" className="link-chip">
              <img src={githubLogo} alt="GitHub" className="link-logo" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>

      <article className="project-card-lg panel">
        <div className="project-heading">
          <div className="project-meta">
            <h3>ReLease</h3>
          </div>
          <img src={projectImage} alt="Project" className="project-logo" />
        </div>
        <div className="project-body">
          <div className="project-copy">
            <p>
              In Canada, specifically in Montreal, people might want to move from their apartment, but there may still be some time (a year or more) left in the lease contract. Now with Bill 31, landlords have the right to also deny a tenant's lease transfer request without reason...
            </p>
            <p>
              Our website is intended to facilitate the lease transfer process between the citizens of Montreal during the current housing crisis. The application would enable tenants to advertise their apartments, post their current lease agreement clauses, and more.
            </p>
          </div>
          <div className="project-gallery">
            <img src={ReLeasePic1} alt="ReLease Screenshot 1" className="gallery-image" />
            <img src={ReLeasePic2} alt="ReLease Screenshot 2" className="gallery-image" />
            <img src={ReLeasePic3} alt="ReLease Screenshot 3" className="gallery-image" />
          </div>
          <div className="project-links">
            <a href="https://github.com/novruzoff/ReLease" target="_blank" rel="noopener noreferrer" className="link-chip">
              <img src={githubLogo} alt="GitHub" className="link-logo" />
              <span>GitHub</span>
            </a>
            <a href="https://devpost.com/software/re-lease" target="_blank" rel="noopener noreferrer" className="link-chip">
              <img src={devpostLogo} alt="Devpost" className="link-logo" />
              <span>Devpost</span>
            </a>
          </div>
        </div>
      </article>

      <article className="project-card-lg panel">
        <div className="project-heading">
          <div className="project-meta">
            <span className="pill">novruzoff.github.io</span>
            <h3>Portfolio Website</h3>
          </div>
          <img src={MNLogo} alt="Portfolio Website Logo" className="project-logo small" />
        </div>
        <div className="project-body">
          <div className="project-copy">
            <p>
              A fully responsive portfolio website built with <strong>React.js</strong>, featuring a modern, clean design with smooth animations and dynamic content rendering. The website is optimized for performance and SEO, ensuring fast load times and smooth navigation across different devices.
            </p>
            <p>
              The site integrates <strong>React Router</strong> for seamless client-side routing, ensuring a consistent user experience as users navigate between sections. Hosted on GitHub Pages, it effectively addresses the challenges of static hosting and client-side routing by using a well-configured 404.html fallback to ensure all routes are accessible directly.
            </p>
            <p>
              This portfolio showcases my skills in both front-end and back-end development and is designed to be highly scalable, modular, and easily maintainable. The use of modern <strong>CSS</strong> techniques such as Flexbox and Grid Layout ensures the site remains visually appealing and functional across various screen sizes.
            </p>
          </div>
          <div className="project-links">
            <a href="https://github.com/novruzoff/novruzoff.github.io" target="_blank" rel="noopener noreferrer" className="link-chip">
              <img src={githubLogo} alt="GitHub" className="link-logo" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>
    </section>

    <div className="footer-text">
      <p>2026 - Murad Novruzov</p>
    </div>
  </main>
);

export default Projects;
