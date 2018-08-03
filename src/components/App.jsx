import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { SinglePhoto } from "./SinglePhoto";
import { listObjects, saveObject, getSingleObject } from "../utils/index";
import _ from "lodash";

import "../styles/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: [],
      selectedPhoto: undefined,
    };
  }

  componentDidMount() {
    const photos = listObjects();
    photos.then((pics) => {
      this.setState({ photos: [...pics] });
    });
  }

  onClick = () => {
    this.setState({ currentView: "AllPhotos" });
    console.log("clicked here");
    console.log(this.state);
  };

  uploadPic = (file) => {
    let arrayPhotos = [];
    arrayPhotos = [...this.state.photos];
    const newPhoto = saveObject(file);
    newPhoto.then((pic) => {
      arrayPhotos = [...arrayPhotos, pic];
      this.setState({ photos: arrayPhotos });
    });
  };

  selectPhoto = (key) => {
    const newKey = key;
    console.log(`displaying ${newKey}`);
    this.setState({ currentView: newKey, selectedPhoto: newKey });
    console.log(this.state);
  };

  render() {
    //TODO set conditions later
    if (this.state.currentView === "AllPhotos") {
      return (
        <div className="app">
          <Navbar goHome={this.onClick} getPhotos={this.uploadPic} />
          <AllPhotos
            photos={this.state.photos}
            selectPhoto={this.selectPhoto}
          />
        </div>
      );
    }
    return (
      <div className="app">
        <Navbar goHome={this.onClick} getPhotos={this.uploadPic} />
        <SinglePhoto image={this.state.selectedPhoto} />
      </div>
    );
  }
}
