import React from 'react';
import './Navigation.css';
import logo from '../assets/logo.png';

const Navigation = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Helio Harvest Solar Logo" width="150px" height="150px"/>
      </div>
      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">WHY GO SOLAR</a></li>
          <li><a href="#">RESIDENTIAL</a></li>
          <li><a href="#">COMMERCIAL</a></li>
          <li><a href="#">BATTERY STORAGE</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">REFERRAL</a></li>
          <li><a href="#">PARTNERSHIP</a></li>
        </ul>
      </nav>
      <div className="buttonfreeestimatesmall">
        <a href="#">GET A FREE ESTIMATE</a>
      </div>
    </header>
  );
};

export default Navigation;