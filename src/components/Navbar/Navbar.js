import React, { Component } from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-component">
        <div className="navbar-container">
          <div className="row navbar-aboutme-row">
            <NavLink className="link" to="/">
              About Me
            </NavLink>
          </div>
          <div className="row navbar-projects-row">
            <NavLink className="link" to="/projects">
              Projects
            </NavLink>
          </div>
          <div className="row navbar-contact-row">
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
