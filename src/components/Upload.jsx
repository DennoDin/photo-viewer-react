import React, { Component } from "react";
import _ from "lodash";

import "../styles/upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="file-upload">
        <form>
          <label>
            FILE
            <input type="file" name="file" />
          </label>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
