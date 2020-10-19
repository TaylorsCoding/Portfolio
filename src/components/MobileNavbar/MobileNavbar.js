import React from "react";
import { NavLink } from "react-router-dom";

import "./MobileNavbar.css";

export default function MobileNavbar(props) {
  return (
    <div className="mnavbar-component">
      <div className="mnavbar-container">
        <div className="mnavbar-about-row">
          <NavLink className="link" to="/">
            About Me
          </NavLink>
        </div>
        <div className="mnavbar-projects-row">
          <NavLink className="link" to="/projects">
            Projects
          </NavLink>
        </div>
        <div className="mnavbar-contact-row">
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
