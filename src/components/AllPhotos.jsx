import React, { Component } from "react";
import { connect } from "react-redux";
import { listPhotos, uploader, goHome, selectPhoto } from "../redux_state";

class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  selectedPhoto = (e) => {
    const key = e.target.alt;
    console.log(key);
    // this.props.selectPhoto(key);
    this.props.selectPhoto();
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

const mapStateToProps = (state) => {
  return {
    currentView: state.currentView,
    photos: state.photos,
    selectedPhoto: state.selectedPhoto,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectPhoto: () => {
      dispatch(selectPhoto());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhotos);
