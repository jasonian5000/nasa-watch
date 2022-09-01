import React from 'react'
import "../css/About.css"
import {linkedin, me, github, devto, nasa, twitter, facebook, instagram, reddit} from "../assets";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-me">
        <h1>About Me</h1>
        <p>My name is Jason and I'm a new developer.</p>
        <p>
          As a Houston native, I have always been fascinated by space travel
          and NASA. I made this website to help others appreciate the wonders of
          space and the incredible achievements of the space exploration
          community. This is my first project developed with React.
        </p>
      </div>
      <div className="about-links">
        <div className="nasa-links">
          <h1>NASA links:</h1>
          <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">
            <img src={nasa} alt="nasa.gov" />
          </a>
          <a href="https://twitter.com/NASA" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.facebook.com/NASA"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/nasa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.reddit.com/user/nasa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={reddit} alt="reddit" />
          </a>
        </div>
        <div className="my-links">
          <h1>My links:</h1>
          <a
            href="https://www.jasonblunck.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={me} alt="jasonblunck.com" />
          </a>
          <a
            href="https://www.linkedin.com/in/jasonblunck/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/jasonian5000"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://dev.to/jasonian5000"
            target="_blank"
            rel="noreferrer"
          >
            <img src={devto} alt="dev.to" />
          </a>
        </div>
      </div>
    </div>
  );
}
