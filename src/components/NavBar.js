import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nasa_big.png"
import "../css/NavBar.css"

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <img className="nav-logo-mobile" src={logo} alt="" />
        <div className="nav-banner">
          <img className="nav-logo" src={logo} alt="" />
          <h1 className="nav-title">NASA WATCH</h1>
        </div>
        <ul className="nav-bar-links">
          <li>
            <Link to="/" className="link">
              <i className="fas fa-home"></i>
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/images" className="link">
              <i className="fa-solid fa-camera"></i>
              <span className="link-text">Images</span>
            </Link>
          </li>
          <li>
            <Link to="/news" className="link">
              <i className="fa-solid fa-newspaper"></i>
              <span className="link-text">News</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              <i className="fa-regular fa-address-card"></i>
              <span className="link-text">About</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
