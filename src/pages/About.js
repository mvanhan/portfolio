import React from 'react';

const About = () => {
  return (
    <div className="main-content">
      <h1>About Me</h1>
      <p>Hi, I'm Walter Miller Van Hanken. I'm a 3rd-year student at UNC Chapel Hill, currently residing in Tulsa, Oklahoma. Feel free to reach out to me at mvanhanken@gmail.com or call me at (918) 703-3547.</p>
      <p>Here you can add more details about your background, interests, and other relevant information.</p>
      <h2>My Resume</h2>
      <iframe 
        src="/WMV Resume.pdf" 
        title="My Resume" 
        style={{ width: '50%', height: '600px', border: 'none' }}>
      </iframe>
    </div>
  );
};

export default About;



