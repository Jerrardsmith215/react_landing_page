import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav ">
        <ul>
          <li className="nav-header">
            <span id="header-span">NuVel Records</span>
          </li>
        </ul>       
        <ul className="justify-content-center" >
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services_off">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    );



    
  }
}

export default Nav;
