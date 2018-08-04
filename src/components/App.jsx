import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { SinglePhoto } from "./SinglePhoto";
import "../styles/styles.css";
import { connect } from "react-redux";
import { listPhotos, uploader, goHome, selectPhoto } from "../redux_state";
// import { PhotosLink } from "../containers";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // send request for photos from aws
    this.props.listAllPhotos();
  }

  render() {
    //TODO set conditions later
    if (this.props.currentView === "AllPhotos") {
      return (
        <div className="app">
          <Navbar />
          <AllPhotos />
        </div>
      );
    }
    return (
      <div className="app">
        <Navbar />
        <SinglePhoto />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentView: state.currentView,
    photos: state.photos,
    selectedPhoto: state.selectedPhoto,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listAllPhotos: () => {
      dispatch(listPhotos());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
