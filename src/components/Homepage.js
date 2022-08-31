import React from "react";
import About from "./About";
import "../css/Homepage.css"
import launch from "../assets/launch.svg"

export default function Homepage() {
  return (
    <div className="homepage-container">
      <About />
      <img className="homepage-img" src={launch} alt="" />
    </div>
  );
}
