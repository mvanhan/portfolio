import '../App.css';
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

const Home = () => {
  return (
    <div className="home-container">
      <Typed
        strings={[
          "Hi, I'm Miller. Welcome!",
          "Please check out my projects and more about me!",
        ]}
        typeSpeed={40}
        backSpeed={20}
        backDelay={2000}
        // loop
      />
    </div>
  );
};

export default Home;
