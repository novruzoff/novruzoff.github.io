// src/components/About.js
import React from 'react';
import './About.css';
import aboutPhoto from '../assets/About-photo.jpg'; // Ensure this path is correct

const About = () => (
  <main>
    <section id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About me</h2>
          <p>My name is Murad Novruzov, and I am a Computer Science student at McGill University in Montreal, Canada. I am passionate about Software Engineering and Artificial Intelligence, with a solid foundation in both front-end and back-end development.</p>
          <h3>Experience</h3>
          <ul>
            <li><strong>IT and Web Development Intern at ARB Media Group</strong><br />
            During my internship at ARB Media Group in Baku, Azerbaijan, I assisted in maintaining and updating the company's website to ensure optimal performance and user experience. I collaborated on multiple projects, contributing to the design and implementation of new features for the broadcaster's digital platforms. Additionally, I provided technical support and participated in developing and deploying multimedia content.</li>
            <li><strong>Book Editor at MathYouCan</strong><br />
            In my role at MathYouCan, I performed comprehensive error checking and solved mathematical tasks for the AP Calculus BC book. I compiled detailed solutions, conducted thorough reviews, and collaborated with the editorial team to refine educational content, ensuring a high-quality learning experience for students.</li>
          </ul>
          <p>I am dedicated to expanding my knowledge and skills in technology, and I am eager to contribute to innovative projects that make a meaningful impact.</p>
        </div>
        <div className="about-image">
          <img src={aboutPhoto} alt="About" />
        </div>
      </div>
      <div className="technical-skills">
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Python, Java, C, Bash, HTML/CSS, JavaScript, TypeScript</li>
          <li><strong>Frameworks:</strong> React.js, Node.js, Django, Dash (Python)</li>
          <li><strong>Developer Tools:</strong> Git, MongoDB, VS Code, Visual Studio, PyCharm, IntelliJ IDEA, Xcode</li>
          <li><strong>Languages:</strong> English, Russian, Azerbaijani, Turkish</li>
        </ul>
      </div>
    </section>
    <div className="footer-text">
      <p>© 2024 - Murad Novruzov</p>
    </div>
  </main>
);

export default About;
