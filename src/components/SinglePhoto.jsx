import React from "react";
import { connect } from "react-redux";
import { listPhotos, uploader, goHome, selectPhoto } from "../redux_state";

const SinglePhoto = () => {
  // console.log(`props inside SinglePhoto ${props}`);
  return (
    <div>
      {/* {console.log(props.key)} */}
      <img
        className="SinglePhoto"
        key={this.props.selectedPhoto}
        src={"http://react.sprint.s3.amazonaws.com/" + this.props.selectedPhoto}
        alt="piece of crap"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentView: state.currentView,
    photos: state.photos,
    selectedPhoto: state.selectedPhoto,
  };
};

export default connect(mapStateToProps)(SinglePhoto);
