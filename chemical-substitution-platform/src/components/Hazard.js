// src/components/Hazard.js
import React, { useState } from 'react';
import './Hazard.css';
import sources from './sources.png';
import food from './food.png';
import chemicals from './chemicals.png';

const Hazard = () => {
  const [industry, setIndustry] = useState('');

  const handleInputChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <section className="hazard-section container my-5">
      <h2 className="title">Find Chemicals in Your Industry – Use ChemNexus</h2>
      <div className="input-container">
        <input
          type="text"
          className="industry-input"
          placeholder="Enter industry (e.g., Food)"
          value={industry}
          onChange={handleInputChange}
        />
      </div>
      <div className="images-container">
        <div className="image-wrapper">
          <img src={sources} alt="Sources" className="hazard-image" />
          <button className="overlay-button">Sources</button>
        </div>
        <div className="image-wrapper">
          <img src={food} alt="Items" className="hazard-image" />
          <button className="overlay-button">Items</button>
        </div>
        <div className="image-wrapper">
          <img src={chemicals} alt="Chemicals" className="hazard-image" />
          <button className="overlay-button">Chemicals</button>
        </div>
      </div>
    </section>
  );
};

export default Hazard;
