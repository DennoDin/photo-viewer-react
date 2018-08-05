import React, { Component } from "react";
import { connect } from "react-redux";
import { uploader } from "../redux_state";

import "../styles/upload.css";

class Upload extends Component {
  sendFile = (e) => {
    const file = document.getElementById("file").files[0];
    this.props.uploadPhoto(file);
    e.preventDefault();
  };
  render() {
    return (
      <div className="file-upload">
        <form>
          <label htmlFor="file">
            FILE
            <input type="file" id="file" />
          </label>
          <button onClick={this.sendFile}>submit</button>
        </form>
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
    uploadPhoto: (file) => {
      dispatch(uploader(file));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
