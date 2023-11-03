import React from 'react';
import './Header.css'; 

const About = () => {
  return (
    <div className="about-us-container">
      <div className="white-box">
        <h2>About Us</h2>
        <p>
        Apps with dependencies will be installed automatically. For example, if you choose to install Events, Candy Shop will first install and/or upgrade the Base Package and Payments, and lastly install Events.</p>
      </div>
    </div>
  );
};

export default About;
