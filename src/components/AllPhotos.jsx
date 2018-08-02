import React, { Component } from "react";
import _ from "lodash";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  selectPhoto = (key) => {
    this.props.selectPhoto(key);
  };

  render() {
    return this.props.photos.map((photo) => {
      return (
        <img
          onClick={this.selectPhoto(photo.Key)}
          className="AllPhotos"
          key={photo.Key}
          src={"http://react.sprint.s3.amazonaws.com/" + photo.Key}
          alt="piece of crap"
        />
      );
    });
  }
}
