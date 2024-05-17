import React from 'react';

function MyLinkedin({ inline }) {
  const navigateToUrl = () => {
    window.open('https://www.linkedin.com/in/wmvanhanken/', '_blank');
  };

  return (
    <button 
      onClick={navigateToUrl} 
      className={inline ? 'inline-button' : ''}>
      Linkedin
    </button>
  );
}

export default MyLinkedin;
