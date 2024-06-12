// src/components/AboutUs.js
import React from "react";
import "./About.css";
import breadcrumbImage from "./a_images/breadcrumb.jpg"; // Update with your breadcrumb image path
import staff from "./a_images/staff.jpg"; // Update with your staff images paths

const AboutUs = () => {
  return (
    <div className="about-us">
      <div
        className="breadcrumb"
        style={{ backgroundImage: `url(${breadcrumbImage})` }}
      >
        About Us
      </div>
      <div className="about-content">
        <h2>Who Are We?</h2>
        <p>
          Dreamy Delights Gift Shop is your go-to destination for unique and
          personalized gifts. We offer a wide range of products to make every
          occasion special, from birthdays to anniversaries. Our mission is to
          bring joy and create memorable experiences through our curated
          collection of gifts.
        </p>
        <p>
          Dreamy Delights Gift Shop is your go-to destination for unique and
          personalized gifts. We offer a wide range of products to make every
          occasion special, from birthdays to anniversaries. Our mission is to
          bring joy and create memorable experiences through our curated
          collection of gifts.
        </p>
      </div>
      <div className="staff-details">
        <h2>Meet Our Team</h2>
        <div className="staff-grid">
          <div className="staff-member">
            <img src={staff} alt="Staff 1" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className="staff-member">
            <img src={staff} alt="Staff 2" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="staff-member">
            <img src={staff} alt="Staff 3" />
            <h3>Sarah Brown</h3>
            <p>CFO</p>
          </div>
          <div className="staff-member">
            <img src={staff} alt="Staff 4" />
            <h3>Mike Johnson</h3>
            <p>COO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
