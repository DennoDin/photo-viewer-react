import React, { Component } from "react";
import _ from "lodash";

export default class SinglePhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        className="SinglePhoto"
        key={this.props.key}
        src={"http://react.sprint.s3.amazonaws.com/" + this.props.key}
        alt="piece of crap"
      />
    );
  }
}
