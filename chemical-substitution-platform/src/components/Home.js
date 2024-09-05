// src/components/Home.js
import React from 'react';
import './Home.css';
import image1 from './home.png'; // Replace with your image path


const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="text-section">
        <h2 id ="head">Welcome to ChemNexus</h2>
        <h2 id="heading">SEARCH , EXPLORE AND SUBSTITUTE</h2>
        <p>
          At ChemNexus, we are dedicated to providing innovative solutions for hazardous chemical substitution. Our platform offers a comprehensive approach to identifying safer alternatives and promoting sustainability in industrial processes.
        </p>
        <button className="btn btn-primary">Chat with AI Boot</button>
      </div>
      <div className="image-section">
        <img src={image1} alt="Chemical 1" className="home-image" />
        
      </div>
    </section>
  );
};

export default Home;
