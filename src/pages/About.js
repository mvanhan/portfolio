import React from 'react';
import './About.css';
import MyLinkedin from '../components/li_button';


const About = () => {
  return (
    <div className="pdf-container">
      <div className="pdf-text-box">
        <p style={{fontSize: 25}}>Hi, I'm Miller. I'm a 3rd-year student at UNC Chapel Hill, studying computer science and philosophy. I'm passionate about technology, but I am particularly interested in the intersection of technology and ethics.</p>
        <p style={{fontSize: 25}}>Feel free to send me an email at mvanhanken@gmail.com, call me at (918) 703-3547, or check out my<MyLinkedin inline/>.</p>
      </div>
      <div className="pdf-viewer">
        <h2 style={{textAlign: 'center'}}>My Resume</h2>
        <iframe 
          src="/WMV Resume.pdf" 
          title="My Resume" 
          style={{ width: '100%', height: '600px', border: 'none' }}>
        </iframe>
      </div>
    </div>
  );
};

export default About;