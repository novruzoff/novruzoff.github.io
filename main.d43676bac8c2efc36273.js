(()=>{"use strict";var n,e={68:(n,e,t)=>{var r=t(540),o=t(961),a=t(72),i=t.n(a),l=t(626);i()(l.A,{insert:"head",singleton:!1}),l.A.locals;var c=t(675);i()(c.A,{insert:"head",singleton:!1}),c.A.locals;const s=t.p+"assets/images/MN_Logo.0324a32803377490891874da0dc9a3d2.png",d=function(){return r.createElement("header",null,r.createElement("div",{className:"logo"},r.createElement("a",{href:"#home"},r.createElement("img",{src:s,alt:"Murad Novruzov Logo"}))),r.createElement("nav",null,r.createElement("a",{href:"#about"},"About"),r.createElement("a",{href:"#projects"},"Projects"),r.createElement("a",{href:"#contact"},"Contact")))};var f=t(301);i()(f.A,{insert:"head",singleton:!1}),f.A.locals;const m=function(){return r.createElement("section",{id:"projects"},r.createElement("div",{className:"project"},r.createElement("h3",null,"ReLease"),r.createElement("p",null,"In Canada, specifically in Montreal, people might want to move from their apartment, but there may still be some time (a year or more) left in the lease contract. Landlords usually have high penalties for breaking their contract before the expiration date, so people usually rush to find someone else to transfer their lease to. Currently, there does not exist a specific website solely for this purpose."),r.createElement("p",null,"Our website is intended to facilitate the lease transfer process between the citizens of Montreal during the current housing crisis. The application would enable tenants to advertise their apartments, post their current lease agreement clauses, the period in which they would like to find another lease, and what they are looking for during the transfer process."),r.createElement("a",{href:"https://github.com/novruzoff/ReLease",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))},g=function(){return r.createElement("div",{className:"App"},r.createElement(d,null),r.createElement("main",null,r.createElement("section",{id:"home"},r.createElement("div",{className:"home-content"},r.createElement("h1",null,"Murad Novruzov"),r.createElement("p",null,"Full-Stack Developer"),r.createElement("button",{className:"btn-cv"},"Download CV")),r.createElement("div",{className:"home-image"},r.createElement("img",{src:s,alt:"Profile"}))),r.createElement("section",{id:"about"},r.createElement("h2",null,"About Me"),r.createElement("p",null,"My name is Murad Novruzov, from Azerbaijan. I am a student at McGill University, majoring in Computer Science and minoring in Management. I am interested in  Software Engineering and Artificial Intelligence. My skills involve both front-end and back-end knowledge.")),r.createElement("section",{id:"projects"},r.createElement("h2",null,"Projects"),r.createElement(m,null))))};var h=t(523);i()(h.A,{insert:"head",singleton:!1}),h.A.locals,o.render(r.createElement(g,null),document.getElementById("root"))},626:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(314),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);"]),o.push([n.id,"/* src/App.css */\n\nbody {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  background: linear-gradient(135deg, #6a11cb, #2575fc);\n  color: #ffffff;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.App {\n  text-align: center;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: inherit;\n}\n\nheader {\n  background: inherit !important; /* Use !important to override any other styles */\n}\n\n#home {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  margin: 0 auto;\n  padding: 8rem 2rem;\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  background: inherit; /* Ensure main content inherits the background */\n}\n\n.home-content {\n  flex: 1;\n  padding: 2rem;\n  text-align: center; /* Align text to the left */\n}\n\n.home-content h1 {\n  font-size: 4rem;\n  margin: 0;\n  font-weight: 700;\n  color: #ffffff;\n  text-align: center; /* Center-align title */\n}\n\n.home-content p {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #ffffff;\n}\n\n.btn-cv {\n  background-color: #ffffff;\n  color: #121212;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  cursor: pointer;\n  border-radius: 50px;\n  margin-top: 2rem;\n  font-weight: 700;\n  transition: background-color 0.3s ease;\n}\n\n.btn-cv:hover {\n  background-color: #a5a5a5;\n}\n\n.home-image {\n  flex: 1;\n  text-align: right; /* Align image to the right */\n  padding: 2rem;\n}\n\n.home-image img {\n  max-width: 80%; /* Adjust image size */\n  height: auto;\n  border-radius: 15px;\n}\n\n#about {\n  padding: 4rem 1rem;\n  margin-left: 30px;\n  color: #ffffff;\n  text-align: left; /* Align text to the left */\n}\n\n#projects {\n  padding: 4rem 1rem;\n  color: #ffffff;\n  text-align: left; /* Align text to the left */\n}\n\nh2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 1rem;\n  text-align: center; /* Center-align titles */\n}\n\n.project {\n  background-color: inherit;\n  padding: 1.5rem;\n  border-radius: 8px;\n  margin: 2rem 0;\n}\n\n.project h3 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #ffffff;\n}\n\n.project p {\n  font-size: 1.1rem;\n  color: #c9c9c9;\n}\n\n.project a {\n  color: #2575fc;\n  text-decoration: none;\n  font-weight: 700;\n}\n\n",""]);const a=o},675:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(314),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"/* src/components/Header.css */\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: inherit; /* Ensure it inherits the background */\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n}\n\nheader .logo {\n  display: flex;\n  align-items: center;\n  margin-left: 2rem; /* Add margin to move it right */\n}\n\nheader .logo img {\n  height: 50px;\n}\n\nheader nav {\n  display: flex;\n  gap: 1.5rem;\n}\n\nheader nav a {\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 7px;\n  transition: background-color 0.3s ease;\n}\n\nheader nav a:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n  text-decoration: none;\n  border-radius: 7px;\n}\n",""]);const a=o},301:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(314),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"#projects {\n    padding: 2rem 1rem;\n    background-color: transparent;\n  }\n  \n  .project {\n    background-color: transparent;\n    padding: 1rem;\n    border-radius: 8px;\n    margin: 1rem 0;\n  }\n  \n  .project h3 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #ffffff;\n    margin-bottom: 10px;\n  }\n  \n  .project p {\n    font-size: 1rem;\n    color: #bbbbbb;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  \n  .project a {\n    color: #2575fc;\n    text-decoration: none;\n    font-weight: 700;\n  }\n  ",""]);const a=o},523:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(314),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"/* src/index.css */\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f5f5f5;\n  }\n  \n  .App {\n    text-align: center;\n  }\n  \n  header {\n    background-color: #333;\n    color: white;\n    padding: 10px 0;\n  }\n  \n  nav a {\n    color: white;\n    margin: 0 15px;\n    text-decoration: none;\n  }\n  \n  nav a:hover {\n    text-decoration: underline;\n  }\n  \n  main {\n    padding: 20px;\n  }\n  \n  footer {\n    background-color: #333;\n    color: white;\n    text-align: center;\n    padding: 10px 0;\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n  }\n  ",""]);const a=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,n=[],r.O=(e,t,o,a)=>{if(!t){var i=1/0;for(d=0;d<n.length;d++){for(var[t,o,a]=n[d],l=!0,c=0;c<t.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((n=>r.O[n](t[c])))?t.splice(c--,1):(l=!1,a<i&&(i=a));if(l){n.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[t,o,a]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.p="/",(()=>{var n={792:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var o,a,[i,l,c]=t,s=0;if(i.some((e=>0!==n[e]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var d=c(r)}for(e&&e(t);s<i.length;s++)a=i[s],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return r.O(d)},t=self.webpackChunknovruzoff_github_io=self.webpackChunknovruzoff_github_io||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0;var o=r.O(void 0,[937],(()=>r(68)));o=r.O(o)})();