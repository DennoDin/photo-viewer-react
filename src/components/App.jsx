import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

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

  render() {
    //TODO set conditions later
    if (this.state.currentView === "AllPhotos") {
      return (
        <div className="app">
          <Navbar onClick={this.onClick} />put all photos here
        </div>
      );
    }
    return (
      <div className="app">
        <Navbar />put single photos here
      </div>
    );
  }
}
