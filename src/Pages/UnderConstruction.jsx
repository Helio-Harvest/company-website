import React from 'react';
import './UnderConstruction.css'; // Import the CSS file
import logo from '../assets/logo.png'; // Import the logo file

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <img src={logo} alt="Logo" className="logo" /> {/* Add your logo path */}
        <h1>We're Coming Soon!</h1>
        <p>Our website is under construction. Stay tuned for something amazing!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
