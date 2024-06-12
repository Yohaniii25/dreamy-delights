// src/components/Box.js
import React from 'react';
import './Box.css'; // Import the CSS file for the Box component

const Box = ({ icon, heading, paragraph }) => {
  return (
    <div className="box">
      <div className="icon">

        
        
        {icon}
        
        </div>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Box;
