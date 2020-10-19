import React, { Component } from "react";

import "./Information.css";

export default class Information extends Component {
  render() {
    return (
      <div className="information-component">
        <div className="information-container">{this.props.children}</div>
      </div>
    );
  }
}
