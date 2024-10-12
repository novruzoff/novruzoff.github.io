"use strict";(self.webpackChunknovruzoff_github_io=self.webpackChunknovruzoff_github_io||[]).push([[170],{170:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var i=t(540),r=t(976),a=t(72),o=t.n(a),s=t(269);o()(s.A,{insert:"head",singleton:!1}),s.A.locals;var l=t(942);const c=t.p+"assets/images/ReLease_Logo2.acd8b88ea9279d6815ed7183ad62bac6.png",m=t.p+"assets/images/instagram.0817d10384dcd75772e057307eed8c17.png",d=t.p+"assets/images/linkedin.8aa147c2c7e100c28d1b234db85e5cf6.png",g=t.p+"assets/images/mail.728e126243b0fc4875404f2ded5df6d9.png";var f=t(658),p=function(){return i.createElement("section",{id:"home"},i.createElement("div",{className:"home-content"},i.createElement("h1",null,"Murad Novruzov"),i.createElement("p",null,"Computer Science Student"),i.createElement("div",{className:"social-icons"},i.createElement("a",{href:"https://instagram.com/novruzoffmurad",target:"_blank",rel:"noopener noreferrer"},i.createElement("img",{src:m,alt:"Instagram"})),i.createElement("a",{href:"https://linkedin.com/in/novruzovmurad",target:"_blank",rel:"noopener noreferrer"},i.createElement("img",{src:d,alt:"LinkedIn"})),i.createElement("a",{href:"https://github.com/novruzoff",target:"_blank",rel:"noopener noreferrer"},i.createElement("img",{src:f.A,alt:"GitHub"})),i.createElement("a",{href:"mailto:murad.novruzov1899@gmail.com"},i.createElement("img",{src:g,alt:"Mail"})))),i.createElement("div",{className:"home-image"},i.createElement("img",{src:l.A,alt:"Profile"})))},u=function(e){var n=e.id,t=e.title,a=e.description,o=e.children;return i.createElement("div",{className:"section-link"},i.createElement("h2",null,t),i.createElement("p",null,a),o,i.createElement(r.N_,{className:"btn-more",to:"/".concat(n)},"Learn More"))},h=function(e){var n=e.image,t=e.title,r=e.description;return i.createElement("div",{className:"project-grid-item"},i.createElement("img",{src:n,alt:t,className:"project-image"}),i.createElement("h3",null,t),i.createElement("p",null,r))};const b=function(){return i.createElement("div",null,i.createElement(p,null),i.createElement("section",{className:"links"},i.createElement(u,{id:"about",title:"About me",description:"My name is Murad Novruzov - an Azerbaijani Computer Science student at McGill University based in Montreal, Canada. I have a passion for Software Engineering and AI, proficient in both front-end and back-end development."}),i.createElement(u,{id:"projects",title:"Projects"},i.createElement("div",{className:"project-grid"},i.createElement(h,{image:c,title:"ReLease",description:"A website for Canadians for lease transfer"}),i.createElement(h,{image:l.A,title:"Portfolio Website",description:"This website! :)"})))),i.createElement("div",{className:"footer-text"},i.createElement("p",null,"© 2024 - Murad Novruzov")))}},269:(e,n,t)=>{t.d(n,{A:()=>a});var i=t(314),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,'/* src/components/Home.css */\n\n#home {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  margin: 0 auto;\n  padding: 8rem 2rem;\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  background: inherit; /* Ensure main content inherits the background */\n}\n\n.home-content {\n  flex: 1;\n  padding: 2rem;\n  text-align: center; /* Center-align title */\n  max-width: 400px;\n}\n\n.home-content h1 {\n  font-size: 4rem;\n  margin: 0;\n  font-weight: 700;\n  color: #ffffff;\n}\n\n.home-content p {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #ffffff;\n}\n\n.social-icons {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n}\n\n.social-icons a {\n  margin: 0 1rem;\n}\n\n.social-icons img {\n  width: 40px; /* Adjust size as needed */\n  height: 40px;\n  transition: transform 0.3s;\n}\n\n.social-icons img:hover {\n  transform: scale(1.15); /* Slightly enlarge the icon on hover */\n}\n\n.home-image {\n  flex: 1;\n  text-align: right; /* Align image to the right */\n  padding: 2rem;\n}\n\n.home-image img {\n  max-width: 75%; /* Adjust image size */\n  height: auto;\n  border-radius: 15px;\n}\n\n.links {\n  display: flex;\n  flex-direction: column;\n  align-items: center; /* Center align the links section */\n  padding: 5rem;\n}\n\n.section-link {\n  margin: 2rem 0;\n  width: 100%;\n  max-width: 1200px; /* Adjust as needed for your layout */\n}\n\n.section-link h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 1rem;\n  text-align: center; /* Center-align titles */\n}\n\n.section-link p {\n  font-size: 1.1rem;\n  color: #ffffff;\n  margin-bottom: 1rem;\n  text-align: left; /* Ensure descriptions are left-aligned */\n}\n\n.section-link .btn-more {\n  display: block; /* Make the link a block element */\n  color: rgb(0, 153, 255);\n  text-decoration: none;\n  font-weight: 700;\n  border-radius: 7px;\n  text-align: left; /* Left-align the "Learn More" links */\n  margin-top: 1rem;\n}\n\n.section-link .btn-more:hover {\n  text-decoration: underline;\n}\n\n.footer-text {\n  text-align: center;\n  padding: 2rem;\n  color: #ffffff;\n  background: inherit; /* Ensure footer inherits the background */\n  margin-top: 2rem;\n}\n\n.projects-content {\n  display: flex;\n  flex-direction: column; /* Arrange items in a column */\n  align-items: flex-start; /* Align items to the left */\n  margin-top: 1rem;\n}\n\n.projects-logo {\n  width: 300px; /* Adjust size as needed */\n  height: auto;\n  margin-bottom: 1rem; /* Add space below the image */\n}\n\n.projects-content ul {\n  list-style-type: disc;\n  margin: 0;\n  padding-left: 20px;\n  color: #ffffff;\n  text-align: left; /* Ensure bullet points are left-aligned */\n}\n\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjusted minmax size */\n  gap: 30px;\n  width: 100%;\n  box-sizing: border-box;\n  justify-items: center; /* Center items horizontally */\n}\n\n.project-grid-item {\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.10);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(9.8px);\n  -webkit-backdrop-filter: blur(9.8px);\n  transition: transform 0.3s; /* Transition for hover effect */\n  display: flex;\n  flex-direction: column;\n  align-items: center; /* Center-align items */\n  justify-content: space-between; /* Distribute space between elements */\n  height: 400px; /* Set a fixed height for consistency */\n  box-sizing: border-box; /* Ensure padding is included in height */\n  text-align: center; /* Center-align text */\n}\n\n.project-grid-item:hover {\n  transform: scale(1.05); /* Slightly enlarge on hover */\n}\n\n.project-image {\n  width: 150px; /* Adjust to a consistent size */\n  height: 150px; /* Adjust to a consistent size */\n  object-fit: contain; /* Ensure image maintains aspect ratio */\n  border-radius: 10px;\n  margin-bottom: 1rem; /* Add space below the image */\n}\n\n.project-grid-item h3 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin: 0.5rem 0; /* Ensure consistent spacing */\n}\n\n.project-grid-item p {\n  font-size: 1.1rem;\n  color: #c9c9c9;\n  margin: 0.5rem 0; /* Ensure consistent spacing */\n}\n\n.project-grid-item .btn-more {\n  margin-top: auto; /* Push the button to the bottom */\n}\n',""]);const a=r},658:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/github.e4c2ff96cb6340fa827a17bf90c75154.png"}}]);