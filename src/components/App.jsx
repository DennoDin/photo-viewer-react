import React, { Component } from "react";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import "../styles/styles.css";
import { connect } from "react-redux";
import { listPhotos } from "../redux_state";

class App extends Component {
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
