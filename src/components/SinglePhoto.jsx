import React from "react";
import { connect } from "react-redux";

const SinglePhoto = (props) => {
  return (
    <div>
      <img
        className="SinglePhoto"
        key={props.selectedPhoto}
        src={`http://react.sprint.s3.amazonaws.com/${props.selectedPhoto}`}
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
