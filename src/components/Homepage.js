import React from "react";
import "../css/Homepage.css"
import launch from "../assets/launch.svg"

export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-summary">
        <h1 className="homepage-title">Welcome</h1>
        <p>
          This website is dedicated to the ongoing achievements of The National
          Aeronautics and Space Administration and to space expoloration in
          general. The main goal is to make the fantastic images captured by
          NASA more accessible to the general public.{" "}
        </p>
      </div>
      <img className="homepage-img" src={launch} alt="" />
    </div>
  );
}
