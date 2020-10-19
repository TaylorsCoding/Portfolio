import React, { Component } from "react";

import "./Projects.css";

import evcHome from "./evchome.png";
import evcMap from "./evcmap.png";
import nlHome from "./neverlost.png";
import quizAPP from "./quizAPP.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-component">
        <div className="projects-container">
          <div className="projects-title-row">
            <h1>Projects</h1>
          </div>
          {this.props.mobile ? (
            <div className="projects-info-row-mobile">
              <div className="projects-evc-container">
                <h2>Every Vote Counts</h2>
                <h5>Home Page</h5>
                <img
                  className="projects-evc-hpimage"
                  src={evcHome}
                  alt="Every Vote Counts Home Page"
                />
                <h5>Results Page</h5>
                <img
                  className="projects-evc-mapimage"
                  src={evcMap}
                  alt="Every Vote Counts Map Page"
                />
                <p>
                  Every Vote Counts provides you with voting locations and
                  information for an entered address. User authentication is
                  used in order to allow people to create accounts and save
                  addresses. Utilizes Google Civic Information and Maps API.
                  Built with the PERN stack.
                </p>
                <div className="projects-evc-links">
                  <p>
                    <a href="https://every-vote-counts.vercel.app">
                      Link to Live App
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/Every-Vote-Counts-Client">
                      Link to Client Repo
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/Every-Vote-Counts-Server">
                      Link to Server Repo
                    </a>
                  </p>
                </div>
              </div>
              <div className="projects-nl-container">
                <h2>Never Lost</h2>
                <img
                  className="projects-nl-image"
                  src={nlHome}
                  alt="Never Lost Home Page"
                />
                <p>
                  Never Lost allows for pet and animal lovers to get together
                  and talk about events. Utilizes 6 PostgreSQL models that have
                  various relationships. Built with the PERN stack.
                </p>
                <div className="projects-nl-links">
                  <p>
                    <a href="https://never-lost.vercel.app/">
                      Link to Live App
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/never-lost-client">
                      Link to Client Repo
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/Never-Lost-Server">
                      Link to Server Repo
                    </a>
                  </p>
                </div>
              </div>
              <div className="projects-tq-container">
                <h2>Thinkful Quiz</h2>
                <img
                  className="projects-tq-image"
                  src={quizAPP}
                  alt="Thinkful Quiz Home Page"
                />
                <p>
                  This is a Quiz app about Thinkful designed to test student's
                  knowledge of the program thus far. I used JavaScript and
                  jQuery to load a correct or incorrect image when the question
                  is submitted, an empty array to store all of the used
                  questions to avoid repeating, and an alert saying "Choose an
                  option!" if the user did not select a choice.
                </p>
                <div className="projects-tq-links">
                  <p>
                    <a href="https://codingbeginner19.github.io/QuizApp/">
                      Link to Live App
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/QuizApp">
                      Link to Repo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="projects-info-row">
              <div className="projects-evc-container">
                <h2>Every Vote Counts</h2>
                <h5>Home Page</h5>
                <img
                  className="projects-evc-hpimage"
                  src={evcHome}
                  alt="Every Vote Counts Home Page"
                />
                <h5>Results Page</h5>
                <img
                  className="projects-evc-mapimage"
                  src={evcMap}
                  alt="Every Vote Counts Map Page"
                />
                <p>
                  Every Vote Counts provides you with voting locations and
                  information for an entered address. User authentication is
                  used in order to allow people to create accounts and save
                  addresses. Utilizes Google Civic Information and Maps API.
                  Built with the PERN stack.
                </p>
                <div className="projects-evc-links">
                  <p>
                    <a href="https://every-vote-counts.vercel.app">
                      Link to Live App
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/Every-Vote-Counts-Client">
                      Link to Client Repo
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/Every-Vote-Counts-Server">
                      Link to Server Repo
                    </a>
                  </p>
                </div>
              </div>
              <div className="projects-nl-container">
                <h2>Never Lost</h2>
                <img
                  className="projects-nl-image"
                  src={nlHome}
                  alt="Never Lost Home Page"
                />
                <p>
                  Never Lost allows for pet and animal lovers to get together
                  and talk about events. Utilizes 6 PostgreSQL models that have
                  various relationships. Built with the PERN stack.
                </p>
                <div className="projects-nl-links">
                  <p>
                    <a href="https://never-lost.vercel.app/">
                      Link to Live App
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/never-lost-client">
                      Link to Client Repo
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/Never-Lost-Server">
                      Link to Server Repo
                    </a>
                  </p>
                </div>
              </div>
              <div className="projects-tq-container">
                <h2>Thinkful Quiz</h2>
                <img
                  className="projects-tq-image"
                  src={quizAPP}
                  alt="Thinkful Quiz Home Page"
                />
                <p>
                  This is a Quiz app about Thinkful designed to test student's
                  knowledge of the program thus far. I used JavaScript and
                  jQuery to load a correct or incorrect image when the question
                  is submitted, an empty array to store all of the used
                  questions to avoid repeating, and an alert saying "Choose an
                  option!" if the user did not select a choice.
                </p>
                <div className="projects-tq-links">
                  <p>
                    <a href="https://codingbeginner19.github.io/QuizApp/">
                      Link to Live App
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/codingbeginner19/QuizApp">
                      Link to Repo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
