import React from 'react';

function MyGithub({ inline }) {
  const navigateToUrl = () => {
    window.open('https://github.com/mvanhan', '_blank');
  };

  return (
    <button 
      onClick={navigateToUrl} 
      className={inline ? 'inline-button' : ''}>
      GitHub
    </button>
  );
}

export default MyGithub;
