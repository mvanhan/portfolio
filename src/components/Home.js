import '../App.css';
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

const Home = () => {
  return (
    <div className="home-container">
      <Typed
        strings={[
          "Hi, I'm Miller. Welcome to my portfolio!",
          " ",
          "I am 3rd-year student at UNC Chapel Hill, studying computer science and philosophy. I am passionate about new technologies, but I am particularly interested in the intersection of technology and ethics.",
          "Please check out my projects and more about me!",
        ]}
        typeSpeed={20}
        // backSpeed={50}
        // backDelay={2000}
        // loop
      />
    </div>
  );
};

export default Home;
