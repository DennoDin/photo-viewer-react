import React, { Component } from "react";
import _ from "lodash";

import "../styles/upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
  }

  sendFile = (e) => {
    const file = document.getElementById("file").files[0];
    this.props.uploadPic(file);
    e.preventDefault();
  };
  render() {
    return (
      <div className="file-upload">
        <form>
          <label>
            FILE
            <input type="file" id="file" />
          </label>
          <button onClick={this.sendFile}>submit</button>
        </form>
      </div>
    );
  }
}
