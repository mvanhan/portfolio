import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="pdf-container">
      <div className="pdf-text-box">
        <h1>About Me</h1>
        <p>Hi, I'm Walter Miller Van Hanken. I'm a 3rd-year student at UNC Chapel Hill, currently residing in Tulsa, Oklahoma. Feel free to reach out to me at mvanhanken@gmail.com or call me at (918) 703-3547.</p>
        <p>Here you can add more details about your background, interests, and other relevant information.</p>
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