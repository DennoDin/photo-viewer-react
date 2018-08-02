import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, saveObject } from "../utils/index";

import "../styles/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: [],
      selectedPhoto: "",
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
    this.setState = {
      currentView: key,
      selectedPhoto: key,
    };
  };

  render() {
    //TODO set conditions later
    if (this.state.currentView === "AllPhotos") {
      return (
        <div className="app">
          <Navbar onClick={this.onClick} uploadPic={this.uploadPic} />
          <AllPhotos
            photos={this.state.photos}
            selectPhoto={this.selectPhoto}
          />
        </div>
      );
    }
    return (
      <div className="app">
        <Navbar onClick={this.onClick} uploadPic={this.uploadPic} />
        <SinglePhoto key={this.state.selectedPhoto} />
      </div>
    );
  }
}
