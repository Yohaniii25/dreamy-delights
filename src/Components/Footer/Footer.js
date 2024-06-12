// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from './f_images/logo1.png'; // Update the path to your logo image

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-slogan">Taste the Joy, Savor the Delight</div>
      </div>
      <div className="footer-column">
        <h3>Quick Visit</h3>
        <div className="footer-menu">
          <p><a href="/">Home</a></p>
          <p><a href="/products">Products</a></p>
          <p><a href="/about">About Us</a></p>
          <p><a href="/contact">Contact Us</a></p>
          </div>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Address: 1234 Street Name, City, State, 56789</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
