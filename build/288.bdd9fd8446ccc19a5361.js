"use strict";(self.webpackChunknovruzoff_github_io=self.webpackChunknovruzoff_github_io||[]).push([[288],{288:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var a=t(540),r=t(72),i=t.n(r),l=t(269);i()(l.A,{insert:"head",singleton:!1}),l.A.locals;const o=t.p+"assets/images/homepage-photo.21301d43e9938b5c575f564ce8b0a128.jpg";var c=t(942);const s=t.p+"assets/images/ReLease_Logo2.acd8b88ea9279d6815ed7183ad62bac6.png",m=t.p+"assets/images/instagram.0817d10384dcd75772e057307eed8c17.png",d=t.p+"assets/images/linkedin.8aa147c2c7e100c28d1b234db85e5cf6.png",p=t.p+"assets/images/mail.728e126243b0fc4875404f2ded5df6d9.png";var g=t(658),f=t(767),u=function(){return a.createElement("section",{id:"home"},a.createElement("div",{className:"home-content"},a.createElement("h1",null,"Murad"),a.createElement("h1",null,"Novruzov"),a.createElement("p",null,"Computer Science Student"),a.createElement("div",{className:"social-icons"},a.createElement("a",{href:"https://instagram.com/novruzoffmurad",target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:m,alt:"Instagram"})),a.createElement("a",{href:"https://linkedin.com/in/novruzovmurad",target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:d,alt:"LinkedIn"})),a.createElement("a",{href:"https://github.com/novruzoff",target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:g.A,alt:"GitHub"})),a.createElement("a",{href:"mailto:murad.novruzov1899@gmail.com"},a.createElement("img",{src:p,alt:"Mail"})))),a.createElement("div",{className:"home-image"},a.createElement("img",{src:o,alt:"Profile",className:"profile-photo"})))},h=function(e){var n=e.image,t=e.title,r=e.description,i=(0,f.Zp)();return a.createElement("div",{className:"project-grid-item",onClick:function(){i("/projects")}},a.createElement("div",{className:"flip-card"},a.createElement("div",{className:"flip-card-inner"},a.createElement("div",{className:"flip-card-front"},a.createElement("img",{src:n,alt:t,className:"project-image"})),a.createElement("div",{className:"flip-card-back"},a.createElement("h3",null,t),a.createElement("p",null,r)))))};const b=function(){return a.createElement("div",null,a.createElement(u,null),a.createElement("section",{id:"about-me",className:"about-section"},a.createElement("h3",null,"ABOUT"),a.createElement("p",null,"Hey! My name is ",a.createElement("strong",null,"Murad Novruzov")," - I am an Azerbaijani Computer Science student at ",a.createElement("strong",null,"McGill University")," (Montreal, Canada)."),a.createElement("p",null,"I have a passion for ",a.createElement("strong",null,"Software Engineering")," and ",a.createElement("strong",null,"AI"),", and I'm proficient in both front-end and back-end development."),a.createElement("h3",null,"EDUCATION"),a.createElement("div",{className:"education-entry"},a.createElement("div",null,a.createElement("p",null,a.createElement("strong",null,"McGill University")),a.createElement("span",{className:"education-title"},"Bachelor of Science in Computer Science")),a.createElement("div",{className:"education-year"},"2023 — 2027")),a.createElement("h3",null,"EXPERIENCE"),a.createElement("div",{className:"experience-section"},a.createElement("div",{className:"experience-entry"},a.createElement("div",{className:"experience-info"},a.createElement("p",null,a.createElement("strong",null,"MindVista McGill")),a.createElement("span",{className:"experience-title"},"Web and Tech Developer")),a.createElement("div",{className:"experience-year"},"November 2024 — present")),a.createElement("div",{className:"experience-entry"},a.createElement("div",{className:"experience-info"},a.createElement("p",null,a.createElement("strong",null,"ARB (Azerbaijan Republic Broadcaster)")),a.createElement("span",{className:"experience-title"},"IT and Web Development Intern")),a.createElement("div",{className:"experience-year"},"June 2023 — August 2023"))),a.createElement("h3",null,"SKILLS"),a.createElement("ul",null,a.createElement("li",null,a.createElement("strong",null,"Languages"),": Python, Java, C, Bash, HTML/CSS, JavaScript, TypeScript, Assembly"),a.createElement("li",null,a.createElement("strong",null,"Software"),": React.js, Node.js, WordPress, Django, Dash (Python), Git"))),a.createElement("section",{className:"links"},a.createElement("div",{className:"section-link"},a.createElement("h2",null,"PROJECTS"),a.createElement("div",{className:"project-grid"},a.createElement(h,{image:s,title:"ReLease",description:"A website for Canadians for lease transfer"}),a.createElement(h,{image:c.A,title:"Portfolio Website",description:"This website! :)"})))),a.createElement("div",{className:"footer-text"},a.createElement("p",null,"2024 - Murad Novruzov"),a.createElement("p",null,"Version 2.1.4")))}},269:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(314),r=t.n(a)()((function(e){return e[1]}));r.push([e.id,"/* Home Section */\n#home {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  margin: 0 auto;\n  padding: 8rem 2rem;\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  background: inherit; /* Ensure main content inherits the background */\n  max-width: 1600px; /* Limit the width for very large screens */\n}\n\n/* For screens smaller than 768px, change layout to column */\n@media (max-width: 768px) {\n  #home {\n    flex-direction: column;\n    height: auto; /* Allow auto height for mobile */\n    padding: 4rem 1rem;\n  }\n\n  .home-content {\n    max-width: 100%; /* Full width for text on mobile */\n    text-align: center;\n    padding-bottom: 2rem;\n  }\n\n  .home-image {\n    max-width: 100%;\n    text-align: center;\n  }\n}\n\n/* Home Content Text */\n.home-content {\n  flex: 1;\n  padding: 2rem;\n  text-align: center;\n  max-width: 45%; /* Restrict maximum width of text to balance space */\n  align-self: center; /* Center align vertically */\n}\n\n.home-content h1 {\n  font-size: 4rem;\n  margin: 0;\n  font-weight: 700;\n  color: #ffffff;\n}\n\n.home-content p {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #ffffff;\n}\n\n.social-icons {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n}\n\n.social-icons a {\n  margin: 0 1rem;\n}\n\n.social-icons img {\n  width: 40px;\n  height: 40px;\n  transition: transform 0.3s;\n}\n\nsocial-icons img:hover {\n  transform: scale(1.15);\n}\n\n/* Home Image */\n.home-image {\n  flex: 1;\n  text-align: right;\n  padding: 2rem;\n  max-width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home-image img.profile-photo {\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  border: 5px solid #0d3b66;\n  object-fit: cover; /* Prevent stretching */\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);\n  transition: none; /* Disable any transitions */\n  pointer-events: none; /* Prevent clicking interaction */\n}\n\n@media (max-width: 768px) {\n  .home-image img.profile-photo {\n    width: 300px;\n    height: 300px;\n  }\n}\n\n/* About Me Section */\n.about-section {\n  background-color: #ffffff;\n  padding: 3rem 10%;\n  text-align: left;\n  max-width: 85%;\n  width: 100%;\n  margin: 0 auto;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n\n.about-section h3 {\n  font-size: 2.5rem;\n  color: #003049;\n  padding: 1rem 0 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.about-section p,\n.about-section ul {\n  font-size: 1.2rem;\n  color: #003049;\n  margin: 0;\n  max-width: 100%;\n  line-height: 1.6;\n}\n\n.about-section ul {\n  list-style: none;\n  padding-left: 0;\n}\n\n.about-section ul li {\n  margin-bottom: 1rem;\n}\n\n/* Education and Experience Entry Styling */\n.education-entry,\n.experience-entry {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n\n.education-year,\n.experience-year {\n  font-weight: bold;\n  color: #003049;\n  align-self: flex-start;\n  margin-top: 0.5rem;\n}\n\n.education-title,\n.experience-title {\n  display: block;\n  font-style: italic;\n  color: #003049;\n  margin-top: 0.5rem;\n}\n\n/* Projects Section */\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 30px; /* Increase gap between grid items */\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 50px;\n  justify-items: center;\n  align-content: left;\n  padding-left: 10%;\n}\n\n.project-grid-item {\n  width: 350px;\n  height: 350px;\n  perspective: 1000px;\n  display: inline-block;\n}\n\n.flip-card {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n\n.project-grid-item:hover .flip-card {\n  transform: rotateY(180deg);\n}\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n}\n\n.flip-card-front {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flip-card-back {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  color: white;\n  transform: rotateY(180deg);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-image {\n  width: 200px; /* Increase logo size */\n  height: 200px;\n  object-fit: contain;\n  border-radius: 10px;\n}\n\n.project-grid-item h3 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin: 0.25rem 0;\n}\n\n.project-grid-item p {\n  font-size: 1.1rem;\n  color: #c9c9c9;\n  word-wrap: break-word;\n  text-align: center;\n  padding: 0 1rem;\n}\n",""]);const i=r},658:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/github.e4c2ff96cb6340fa827a17bf90c75154.png"}}]);