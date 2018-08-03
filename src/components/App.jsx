import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { SinglePhoto } from "./SinglePhoto";
import "../styles/styles.css";
import { listPhotos } from "./redux_state";
import PhotosLink from "./containers";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // PhotosLink
    console.log(PhotosLink);
  }

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
