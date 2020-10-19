import React, { Component } from "react";

import ProfilePicture from "../ProfilePicture/ProfilePicture";
import Title from "../Title/Title";
import MainContent from "../MainContent/MainContent";

import "./App.css";

class App extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    const { history } = this.props;
    console.log("here");
    history.push("/");
    this.animateBackground();
  }

  animateBackground() {
    const speed = 50;

    let current = 0;

    setInterval(() => {
      current -= 1;

      const container = document.getElementById("app-container");

      container.style.backgroundPositionX = `${current}px`;
    }, speed);
  }

  render() {
    return (
      <div className="app-container" id="app-container">
        <div className="app-content">
          <ProfilePicture />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
