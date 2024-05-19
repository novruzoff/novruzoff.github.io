import React from 'react';
import './Project.css';

const Project = () => (
  <section id="projects">
    <div className="project">
      <h3>ReLease</h3>
      <p>In Canada, specifically in Montreal, people might want to move from their apartment, but there may still be some time (a year or more) left in the lease contract. Landlords usually have high penalties for breaking their contract before the expiration date, so people usually rush to find someone else to transfer their lease to. Currently, there does not exist a specific website solely for this purpose.</p>
      <p>Our website is intended to facilitate the lease transfer process between the citizens of Montreal during the current housing crisis. The application would enable tenants to advertise their apartments, post their current lease agreement clauses, the period in which they would like to find another lease, and what they are looking for during the transfer process.</p>
      <a href="https://github.com/novruzoff/ReLease" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </section>
);

export default Project;
