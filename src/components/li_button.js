import React from 'react';

function MyLinkedin() {
    const navigateToUrl = () => {
      window.open('https://www.linkedin.com/in/wmvanhanken/', '_blank');
    };
  
    return (
      <div>
        <button onClick={navigateToUrl} style={{marginLeft: '10px', fontWeight: 'bold', fontSize: '15px'}}>
           Go 
        </button>
    </div>
    );
  }
  
export default MyLinkedin;
