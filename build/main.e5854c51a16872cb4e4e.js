(()=>{"use strict";var n,e,t,r,o,a={74:(n,e,t)=>{var r=t(540),o=t(961),a=t(72),i=t.n(a),l=t(626);i()(l.A,{insert:"head",singleton:!1}),l.A.locals;var c=t(675);i()(c.A,{insert:"head",singleton:!1}),c.A.locals;var f=t(767),d=t(976),s=t(942);function u(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,f=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(n){f=!0,o=n}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw o}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const g=function(){var n=(0,f.zy)(),e=u((0,r.useState)(!0),2),t=e[0],o=e[1],a=u((0,r.useState)(0),2),i=a[0],l=a[1],c=function(){window.scrollY>i?o(!1):o(!0),l(window.scrollY)};return(0,r.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}}),[i]),r.createElement("header",{className:t?"visible":"hidden"},r.createElement("div",{className:"logo"},r.createElement(d.N_,{to:"/"},r.createElement("img",{src:s.A,alt:"Murad Novruzov Logo"}))),r.createElement("nav",null,r.createElement(d.N_,{to:"/about",className:"/about"===n.pathname?"active":""},"About"),r.createElement(d.N_,{to:"/projects",className:"/projects"===n.pathname?"active":""},"Projects"),r.createElement("a",{href:"./CV.pdf",target:"_blank",rel:"noopener noreferrer",className:"/resume"===n.pathname?"active":""},"Resume")))};var h=(0,r.lazy)((function(){return t.e(288).then(t.bind(t,288))})),p=(0,r.lazy)((function(){return t.e(655).then(t.bind(t,655))})),v=(0,r.lazy)((function(){return t.e(674).then(t.bind(t,674))}));const b=function(){return(0,r.useEffect)((function(){var n=document.createElement("div");n.classList.add("glow"),document.body.appendChild(n);var e=function(e){n.style.top="".concat(e.pageY,"px"),n.style.left="".concat(e.pageX,"px")};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e),document.body.removeChild(n)}}),[]),r.createElement(d.I9,null,r.createElement("div",{className:"App"},r.createElement(g,null),r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(f.BV,null,r.createElement(f.qh,{path:"/",element:r.createElement(h,null)}),r.createElement(f.qh,{path:"/about",element:r.createElement(p,null)}),r.createElement(f.qh,{path:"/projects",element:r.createElement(v,null)})))))};var y=t(523);i()(y.A,{insert:"head",singleton:!1}),y.A.locals,o.render(r.createElement(b,null),document.getElementById("root"))},626:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(314),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);"]),o.push([n.id,"body {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  background-color: #003049; /* Set solid background color */\n  color: #ffffff;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.App {\n  text-align: center;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: inherit;\n}\n\n/* Glowing Circle */\n.glow {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  background-color: #00798c;\n  border-radius: 100%;\n  pointer-events: none; /* Makes sure the element does not interfere with clicks */\n  filter: blur(100px);\n  opacity: 0.4;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n}\n\nheader {\n  background: inherit !important;\n}\n\n#home {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  margin: 0 auto;\n  padding: 8rem 2rem;\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  background: inherit;\n}\n\n.home-content {\n  flex: 1;\n  padding: 2rem;\n  text-align: center;\n}\n\n.home-content h1 {\n  font-size: 4rem;\n  margin: 0;\n  font-weight: 700;\n  color: #ffffff;\n  text-align: center;\n}\n\n.home-content p {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #ffffff;\n}\n\n.btn-cv {\n  background-color: #ffffff;\n  color: #121212;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  cursor: pointer;\n  border-radius: 50px;\n  margin-top: 2rem;\n  font-weight: 700;\n  transition: background-color 0.3s ease;\n}\n\n.btn-cv:hover {\n  background-color: #a5a5a5;\n}\n\n.home-image {\n  flex: 1;\n  text-align: right;\n  padding: 2rem;\n}\n\n.home-image img {\n  max-width: 80%;\n  height: auto;\n  border-radius: 15px;\n}\n\n#about {\n  padding: 4rem 1rem;\n  margin-left: 30px;\n  color: #ffffff;\n  text-align: left;\n}\n\n#projects {\n  padding: 4rem 1rem;\n  color: #ffffff;\n  text-align: left;\n}\n\nh2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.project {\n  background-color: inherit;\n  padding: 1.5rem;\n  border-radius: 8px;\n  margin: 2rem 0;\n}\n\n.project h3 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #ffffff;\n}\n\n.project p {\n  font-size: 1.1rem;\n  color: #c9c9c9;\n}\n\n.project a {\n  color: #2575fc;\n  text-decoration: none;\n  font-weight: 700;\n}\n",""]);const a=o},675:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(314),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"/* src/components/Header.css */\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: inherit; /* Ensure it inherits the background */\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n  transition: transform 0.3s ease-in-out; /* Add transition for smooth hiding/showing */\n}\n\nheader.hidden {\n  transform: translateY(-100%); /* Hide header by moving it up */\n}\n\nheader.visible {\n  transform: translateY(0); /* Show header by moving it to its original position */\n}\n\nheader .logo {\n  display: flex;\n  align-items: center;\n  margin-left: 2rem; /* Add margin to move it right */\n}\n\nheader .logo img {\n  height: 50px;\n  transition: transform 0.3s; /* Add transition for magnifying effect */\n}\n\nheader .logo img:hover {\n  transform: scale(1.2); /* Magnify on hover */\n}\n\nheader nav {\n  display: flex;\n  gap: 1.5rem;\n}\n\nheader nav a {\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 7px;\n  transition: background-color 0.3s ease, transform 0.3s; /* Add transition for magnifying effect */\n}\n\nheader nav a:hover {\n  transform: scale(1.2); /* Magnify on hover */\n  text-decoration: none;\n}\n\nheader nav a.active {\n  color: #ffffff; /* Highlight color for the active link */\n  text-decoration: underline; /* Underline the active link */\n}\n\nheader nav a:not(.active) {\n  color: #ffffff; /* Slightly gray color for inactive links */\n}\n",""]);const a=o},523:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(314),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"/* src/index.css */\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #003049;\n  }\n  \n  .App {\n    text-align: center;\n  }\n  \n  header {\n    background-color: #333;\n    color: white;\n    padding: 10px 0;\n  }\n  \n  nav a {\n    color: white;\n    margin: 0 15px;\n    text-decoration: none;\n  }\n  \n  nav a:hover {\n    text-decoration: underline;\n  }\n  \n  main {\n    padding: 20px;\n  }\n  \n  footer {\n    background-color: #333;\n    color: white;\n    text-align: center;\n    padding: 10px 0;\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n  }\n  ",""]);const a=o},942:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/MN_Logo.0324a32803377490891874da0dc9a3d2.png"}},i={};function l(n){var e=i[n];if(void 0!==e)return e.exports;var t=i[n]={id:n,exports:{}};return a[n](t,t.exports,l),t.exports}l.m=a,n=[],l.O=(e,t,r,o)=>{if(!t){var a=1/0;for(d=0;d<n.length;d++){for(var[t,r,o]=n[d],i=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((n=>l.O[n](t[c])))?t.splice(c--,1):(i=!1,o<a&&(a=o));if(i){n.splice(d--,1);var f=r();void 0!==f&&(e=f)}}return e}o=o||0;for(var d=n.length;d>0&&n[d-1][2]>o;d--)n[d]=n[d-1];n[d]=[t,r,o]},l.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return l.d(e,{a:e}),e},t=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,l.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);l.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,l.d(o,a),o},l.d=(n,e)=>{for(var t in e)l.o(e,t)&&!l.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},l.f={},l.e=n=>Promise.all(Object.keys(l.f).reduce(((e,t)=>(l.f[t](n,e),e)),[])),l.u=n=>n+"."+{288:"000fdfe936a198e0a2f9",655:"a9bffb54bb40030a82d5",674:"6f6df75b5cddbbfe81b8"}[n]+".js",l.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r={},o="novruzoff.github.io:",l.l=(n,e,t,a)=>{if(r[n])r[n].push(e);else{var i,c;if(void 0!==t)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var s=f[d];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==o+t){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+t),i.src=n),r[n]=[e];var u=(e,t)=>{i.onerror=i.onload=null,clearTimeout(m);var o=r[n];if(delete r[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((n=>n(t))),e)return e(t)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.p="/",(()=>{var n={792:0};l.f.j=(e,t)=>{var r=l.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=n[e]=[t,o]));t.push(r[2]=o);var a=l.p+l.u(e),i=new Error;l.l(a,(t=>{if(l.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+e,e)}},l.O.j=e=>0===n[e];var e=(e,t)=>{var r,o,[a,i,c]=t,f=0;if(a.some((e=>0!==n[e]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(c)var d=c(l)}for(e&&e(t);f<a.length;f++)o=a[f],l.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return l.O(d)},t=self.webpackChunknovruzoff_github_io=self.webpackChunknovruzoff_github_io||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),l.nc=void 0;var c=l.O(void 0,[130],(()=>l(74)));c=l.O(c)})();