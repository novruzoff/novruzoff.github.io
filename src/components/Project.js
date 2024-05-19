import React, { Suspense, lazy } from 'react';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectDetails />
        </Suspense>
        <a href="https://github.com/novruzoff/novruzoff.github.io" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
};

export default Project;
