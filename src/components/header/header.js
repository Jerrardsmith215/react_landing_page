import React, { Component } from "react";
import Nav from "./nav.js";
import "./header.css";
// import NuVeL from '../images/NuVeL.png';

export default class Header extends Component() {
  render() {
    return (
      <>
        <Nav />

        <div className="card">
          <div className="card-header"></div>
          <div className="card-body">
            {/* <img src={NuVel} alt="Company Logo"/> */}
          </div>
        </div>
      </>
    );
  }
}
