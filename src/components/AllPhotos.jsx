import React, { Component } from "react";
import _ from "lodash";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  selectedPhoto = (e) => {
    const key = e.target.alt;
    console.log(key);
    this.props.selectPhoto(key);
  };

  render() {
    return this.props.photos.map((photo) => {
      return (
        <img
          className="AllPhotos"
          key={photo.Key}
          src={"http://react.sprint.s3.amazonaws.com/" + photo.Key}
          alt={photo.Key}
          onClick={this.selectedPhoto}
        />
      );
    });
  }
}
