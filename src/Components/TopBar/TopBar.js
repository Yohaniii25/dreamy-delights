import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <span><FontAwesomeIcon icon={faPhone} /> +1234567890</span>
        <span><FontAwesomeIcon icon={faEnvelope} /> info@dreamydelights.com</span>
        <span><FontAwesomeIcon icon={faMapMarkerAlt} /> 23/b, Beddagana Road, Pitakotte</span>
      </div>
    </div>
  );
};

export default TopBar;
