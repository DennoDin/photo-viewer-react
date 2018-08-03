import React, { Component } from "react";
import Upload from "./Upload";
import _ from "lodash";

import "../styles/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <button onClick={this.props.goHome}>Title</button>
        <Upload uploadPic={this.props.getPhotos} />
      </div>
    );
  }
}
