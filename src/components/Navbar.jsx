import React, { Component } from "react";
import Upload from "./Upload";
import { connect } from "react-redux";
import { listPhotos, uploader, goHome, selectPhoto } from "../redux_state";

import "../styles/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <button onClick={this.props.goHome}>Title</button>
        <Upload uploadPic={this.props.getPhotos} />
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
    goHome: () => {
      dispatch(goHome());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
