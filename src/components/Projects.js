import React from 'react';
import './Projects.css';
import projectImage from '../assets/ReLease_Logo.png'; // Ensure the path is correct
import ReLeasePic1 from '../assets/ReLease_pic1.png';
import ReLeasePic2 from '../assets/ReLease_pic2.png';
import ReLeasePic3 from '../assets/ReLease_pic3.png';
import githubLogo from '../assets/github.png';
import devpostLogo from '../assets/devpost.png';


const Projects = () => (
  <main>
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src={projectImage} alt="Project" className="project-image" />
        <div className="project-content">
          <h3>• ReLease</h3>
          <p>
            In Canada, specifically in Montreal, people might want to move from their apartment, but there may still be some time (a year or more) left in the lease contract. Now with Bill 31, landlords have the right to also deny a tenant's lease transfer request without reason. Many landlords believe that the high penalties for premature lease termination serve as a form of protection for both parties to the agreement. When a tenant breaks a lease early, the landlord loses potential rent income from the vacant property until it is rented again. To avoid this problem, the tenant finds a new tenant to transfer their lease rights to them. This explains why lease transfers are so common in Montreal.

Currently, Kijiji and Facebook Marketplace facilitate apartment hunting. However, they aren't dedicated platforms for renters.


          </p>
          <p>
            Our website is intended to facilitate the lease transfer process between the citizens of Montreal during the current housing crisis. The application would enable tenants to advertise their apartments, post their current lease agreement clauses, the period in which they would like to find another lease, and what they are looking for during the transfer process.
          </p>
          <div className="project-gallery">
            <img src={ReLeasePic1} alt="ReLease Screenshot 1" className="gallery-image" />
            <img src={ReLeasePic2} alt="ReLease Screenshot 2" className="gallery-image" />
            <img src={ReLeasePic3} alt="ReLease Screenshot 3" className="gallery-image" />
          </div>
          <div className="project-links">
            <a href="https://github.com/novruzoff/ReLease" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="link-logo" />
            </a>
            <a href="https://devpost.com/software/re-lease" target="_blank" rel="noopener noreferrer">
              <img src={devpostLogo} alt="Devpost" className="link-logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <div className="footer-text">
      <p>© 2024 - Murad Novruzov</p>
    </div>
  </main>
);

export default Projects;
