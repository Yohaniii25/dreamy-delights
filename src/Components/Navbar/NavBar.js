import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import TopBar from "../TopBar/TopBar";

// Import the logo image
import logo from "./n_images/logo1.png"; // Update with your logo path

const NavBar = () => {
  return (
    <>
    <TopBar />
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
