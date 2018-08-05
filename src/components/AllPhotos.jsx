import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPhoto } from "../redux_state";

class AllPhotos extends Component {
  selectedPhoto = (e) => {
    console.log(e.target);
    let key;
    if (e.target.firstChild) {
      console.log(e.target.firstChild.alt);
      key = e.target.firstChild.alt;
    } else {
      key = e.target.alt;
    }
    console.log(key);
    this.props.selectPhoto(key);
  };

  render() {
    return this.props.photos.map((photo, i) => {
      return (
        <span
          key={photo.Key}
          onClick={this.selectedPhoto}
          onKeyDown={this.selectedPhoto}
          tabIndex={i}
          role="button"
        >
          <img
            className="AllPhotos"
            src={`http://react.sprint.s3.amazonaws.com/${photo.Key}`}
            alt={photo.Key}
          />
        </span>
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
    selectPhoto: (key) => {
      dispatch(selectPhoto(key));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhotos);
