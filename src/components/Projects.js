import React from 'react';
import './Projects.css';
import Project from './Project';

const Projects = () => (
  <main>
    <section id="projects">
      <h2>Projects</h2>
      <Project />
      <p>Here you can add more detailed descriptions of your projects, including the technologies used, your role, challenges faced, and achievements.</p>
    </section>
    <div className="footer-text">
      <p>© 2024 - Murad Novruzov</p>
    </div>
  </main>
);

export default Projects;
