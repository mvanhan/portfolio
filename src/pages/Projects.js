import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const projects = [
    {
      title: 'Akari Game Recreation | Java',
      description: 'I developed a digital version of the puzzle game Akari as part of a class project. Starting with provided base code and general instructions, I implemented the majority of the functionality myself, adhering to the Model-View-Controller (MVC) design pattern.',
      media: '/AkariVid.mov'
    },
    {
      title: 'Live Polling Site | React.js, CSS, Firebase | bidenortrump.org',
      description: 'I developed a responsive web application which allows users to vote for their preferred candidate and see real-time updates of the vote counts. The app is built using React for the front end and Firebase for real-time data synchronization. The purpose of the app was to gain experience with data handling and synchronization. Additionally, I leased the domain name for 1 year because I anticiapte significant accidental traffic during the upcoming election season.',
      media: 'https://www.bidenortrump.org/' 
    },
    {
      title: 'Discussion of Ethical Implications of AI',
      description: 'This is an original research paper defending the following original thesis: "If artificial intelligence gains access to a fully immersive virtual reality, it will be capable of having subjective experiences."',
      media: '/AI and Subjective Experiences.pdf'
    },
    {
      title: 'First Website/Project | React.js, CSS',
      description: 'This site was my first attempt at a personal coding project. The content was inspired by pop culture via my friends.',
      media: 'https://directory-social-git-main-mvanhans-projects.vercel.app/' 
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`project-box ${expandedIndex === index ? 'expanded' : ''}`}
          onClick={() => toggleExpand(index)}
        >
          <div className="project-content">
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
          </div>
          {expandedIndex === index && (
            <div className="project-details" onClick={stopPropagation}>
              {project.media && (
                project.media.endsWith('.mp4') || project.media.endsWith('.mov') ? (
                  <video controls className="project-video" onClick={stopPropagation}>
                    <source src={project.media} type="video/mp4" />
                    <source src={project.media} type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                ) : project.media.endsWith('.pdf') ? (
                  <iframe 
                    src={project.media} 
                    title={`${project.title} PDF`} 
                    className="project-pdf"
                    frameBorder="0"
                  ></iframe>
                ) : (
                  <iframe 
                    src={project.media} 
                    title={`${project.title} Website`} 
                    className="project-website"
                    frameBorder="0"
                  ></iframe>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
