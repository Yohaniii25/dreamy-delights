// src/components/Contact.js
import React from 'react';
import './Contact.css';
import breadcrumbImage from './c_images/breadcrumb.jpg'; // Update with your breadcrumb image path

const Contact = () => {
  return (
    <div className="contact-page">
      <div
        className="breadcrumb"
        style={{ backgroundImage: `url(${breadcrumbImage})` }}
      >
        Contact Us
      </div>
      <div className="contact-info">
        <div className="contact-column">
          <h3>Address</h3>
          <p>123 Giftshop Lane</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="contact-column">
          <h3>Contact Number</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-column">
          <h3>Email</h3>
          <p>info@giftshop.com</p>
        </div>
      </div>
      <div className="map-row">
        <h3>Our Location</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096143!2d144.95565131558313!3d-37.81731397975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772f9b0bb5fd9c!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1574220813646!5m2!1sen!2sau"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
      </div>
      <div className="contact-form-row">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Contact Number:</label>
          <input type="tel" id="phone" name="phone" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
