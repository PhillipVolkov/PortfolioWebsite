import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Splash from './Splash/Splash';
import About from './About/About';
import reportWebVitals from './reportWebVitals';
import Education from './Education/Education';
import Orgs from './Orgs/Orgs';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="home" className="page">
      <Splash />
    </div>

    <div id="about" className="page">
      <About />
    </div>

    <div id="education" className="page" style={{backgroundColor:"#D4C4B0"}}>
      <Education />
    </div>
    
    <div id="organizations" className="page">
      <Orgs />
    </div>

    <div id="projects" className="page"  style={{backgroundColor:"#D4C4B0"}}>
      <Projects />
    </div>

    <div id="skills" className="page">
      <Skills />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();