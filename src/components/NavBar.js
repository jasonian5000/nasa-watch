import React from 'react'
import {  Link } from "react-router-dom";
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <SearchBar />
        <ul className="nav-bar-links">
          <li>
            <Link to="/" className='link'>
                <i className="fas fa-home"></i>
                <span className="link-text">Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;