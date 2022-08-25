import React from 'react'
import {  Link } from "react-router-dom";
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <SearchBar />
      <ul className='nav-bar-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;