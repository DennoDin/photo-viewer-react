import { connect } from "react-redux";
import { listPhotos } from "./redux_state.jsx";
import App from "./components/App";

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
      dispatch(listPhotos);
    },
  };
};

const PhotosLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default PhotosLink;
