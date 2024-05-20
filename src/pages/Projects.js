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
      title: 'Akari Game Recreation',
      description: 'I developed a digital version of the puzzle game Akari as part of a class project. Starting with provided base code and general instructions, I implemented the majority of the functionality myself, adhering to the Model-View-Controller (MVC) design pattern.',
      media: '/AkariVid.mov'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2. This project is about...',
      media: '/path/to/project2-image.jpg'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3. This project is about...',
      media: '/path/to/project3-image.jpg'
    }
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`project-box ${expandedIndex === index ? 'expanded' : ''}`}
          onClick={() => toggleExpand(index)}
        >
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-details" onClick={stopPropagation}>
            {project.media && (
              project.media.endsWith('.mp4') || project.media.endsWith('.mov') ? (
                <video controls className="project-video">
                  <source src={project.media} type="video/mp4" />
                  <source src={project.media} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.media} alt={`${project.title} media`} style={{width: '100%'}} />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
