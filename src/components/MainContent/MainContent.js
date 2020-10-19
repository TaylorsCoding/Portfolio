import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";
import Information from "../Information/Information";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

import "./MainContent.css";

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <div className="maincontent-desktop">
          <div className="maincontent-component desktop">
            <div className="maincontent-container">
              <div className="maincontent-title-row">
                <Title className="maincontent-title" />
              </div>
              <div className="maincontent-info-row">
                <div className="maincontent-navbar-col">
                  <Navbar />
                </div>
                <div className="maincontent-info-col">
                  <Information>
                    <Switch>
                      <Route exact path={"/"} component={AboutMe} />
                      <Route exact path={"/projects"} component={Projects} />
                      <Route exact path={"/contact"} component={Contact} />
                      <Route component={NotFoundPage} />
                    </Switch>
                  </Information>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="maincontent-mobile">
          <div className="maincontent-component">
            <div className="maincontent-container">
              <div className="maincontent-title-row">
                <Title className="maincontent-title" />
              </div>
              <div className="maincontent-navbar-scroll-mobile">
                <div className="maincontent-navbar-row-mobile">
                  <MobileNavbar />
                </div>
                <div className="maincontent-info-row-mobile">
                  <Information>
                    <Switch>
                      <Route
                        exact
                        path={"/"}
                        render={(props) => <AboutMe {...props} mobile={true} />}
                      />
                      <Route
                        exact
                        path={"/projects"}
                        render={(props) => (
                          <Projects {...props} mobile={true} />
                        )}
                      />
                      <Route
                        exact
                        path={"/contact"}
                        render={(props) => <Contact {...props} mobile={true} />}
                      />
                      <Route
                        exact
                        path={"/Portfolio"}
                        render={(props) => <AboutMe {...props} mobile={true} />}
                      />
                      <Route component={NotFoundPage} />
                    </Switch>
                  </Information>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
