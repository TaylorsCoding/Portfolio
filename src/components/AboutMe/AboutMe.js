import React, { Component } from "react";

import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        {this.props.mobile ? (
          <div className="aboutme-component-mobile">
            <div className="aboutme-container-mobile">
              <div className="aboutme-title-row-mobile">
                <h1>About Me</h1>
              </div>
              <div className="aboutme-content-row-mobile">
                <p>
                  I'm an avid hiker, audio engineer, socialite, dog dad, and web
                  developer with a crave for creation. I love puns and having my
                  own input on how to structure and design content. I'm familiar
                  with HTML, CSS, JavaScript, and jQuery so far and am currently
                  learning more. My passion for web development started as a
                  backyard project selling hover boards in 2014 for my friend's
                  company called "Vengatti" that he asked me to join. Together
                  the CEO and I created a small team of individuals assigned to
                  different tasks such as marketing, product design, and managed
                  to amass collectively over 20,000 followers on Twitter and
                  Instagram within four months. Our website needed work and so
                  we hired someone to help us out. When the website was finished
                  I was impressed but still wanted to drastically change the
                  user experience and realized later that my interest could
                  become a career. In the end I learned that I had a passion for
                  web development and being a part of a team.
                </p>
                <p>
                  In 2019 I decided to change careers and make my passion a
                  reality by joining Thinkful. I'm a firm believer that in order
                  to become great at anything you must surround yourself with
                  greatness. My experience shaped me into a natural team player
                  and leader with a knack for creation and project building. My
                  goal is to join a team of exceptional web developers to
                  observe, learn from, produce results with, and to show why I'm
                  a valuable and unique web developer.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="aboutme-component">
            <div className="aboutme-container">
              <div className="aboutme-title-row">
                <h1>About Me</h1>
              </div>
              <div className="aboutme-content-row">
                <p>
                  I'm an avid hiker, audio engineer, socialite, dog dad, and web
                  developer with a crave for creation. I love puns and having my
                  own input on how to structure and design content. I'm familiar
                  with HTML, CSS, JavaScript, and jQuery so far and am currently
                  learning more. My passion for web development started as a
                  backyard project selling hover boards in 2014 for my friend's
                  company called "Vengatti" that he asked me to join. Together
                  the CEO and I created a small team of individuals assigned to
                  different tasks such as marketing, product design, and managed
                  to amass collectively over 20,000 followers on Twitter and
                  Instagram within four months. Our website needed work and so
                  we hired someone to help us out. When the website was finished
                  I was impressed but still wanted to drastically change the
                  user experience and realized later that my interest could
                  become a career. In the end I learned that I had a passion for
                  web development and being a part of a team.
                </p>
                <p>
                  In 2019 I decided to change careers and make my passion a
                  reality by joining Thinkful. I'm a firm believer that in order
                  to become great at anything you must surround yourself with
                  greatness. My experience shaped me into a natural team player
                  and leader with a knack for creation and project building. My
                  goal is to join a team of exceptional web developers to
                  observe, learn from, produce results with, and to show why I'm
                  a valuable and unique web developer.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
