import React, { Component } from "react";

import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        {this.props.mobile ? (
          <div className="contact-component-mobile">
            <div className="contact-container">
              <div className="contact-title-row">
                <h1>Contact</h1>
              </div>
              <div className="contact-email-row">
                <h3>Email</h3>
                <p>swilliamtaylor@gmail.com</p>
              </div>
              <div className="contact-github-row">
                <a href="https://github.com/codingbeginner19">
                  <h3>GitHub</h3>
                </a>
              </div>
              <div className="contact-linkedin-row">
                <a href="https://github.com/codingbeginner19">
                  <h3>LinkedIn</h3>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="contact-component">
            <div className="contact-container">
              <div className="contact-title-row">
                <h1>Contact</h1>
              </div>
              <div className="contact-email-row">
                <h3>Email</h3>
                <p>swilliamtaylor@gmail.com</p>
              </div>
              <div className="contact-github-row">
                <h3>GitHub</h3>
                <p>
                  <a href="https://github.com/codingbeginner19">
                    https://github.com/codingbeginner19
                  </a>
                </p>
              </div>
              <div className="contact-linkedin-row">
                <h3>LinkedIn</h3>
                <p>
                  <a href="https://github.com/codingbeginner19">
                    https://github.com/codingbeginner19
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
