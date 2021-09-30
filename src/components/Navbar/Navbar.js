import React from "react";
import "./Navbar.css";

import { Fade } from "react-reveal";

function Navbar() {
  return (
    <>
      <Fade top duration={1000} distance="20px">
        <div id="navbar">
          <header className="header">
            <a href="navbar" className="logo">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name"> Avi Sharma</span>
              <span className="grey-color"> /&gt;</span>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <a href="#aboutme">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact-me">Contact Me</a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    </>
  );
}

export default Navbar;
