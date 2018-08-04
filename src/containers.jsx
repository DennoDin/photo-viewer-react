import { connect } from "react-redux";
import { listPhotos, uploader, goHome, selectPhoto } from "./redux_state.jsx";
import App from "./components/App";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import { SinglePhoto } from "./components/SinglePhoto";
import AllPhotos from "./components/AllPhotos";

const mapStateToProps = (state) => {
  return {
    currentView: state.currentView,
    photos: state.photos,
    selectedPhoto: state.selectedPhoto,
  };
};

const photosDispatchToProps = (dispatch) => {
  return {
    listAllPhotos: () => {
      dispatch(listPhotos);
    },

    // goHomeButton: () => {
    //   dispatch(goHome);
    // },

    // // TODO: file argument is needed or not, later check it!!!!
    // upload: (file) => {
    //   dispatch(uploader, file);
    // },

    // selectPic: (key) => {
    //   dispatch(selectPhoto, key);
    // },
  };
};

export default connect(
  mapStateToProps,
  photosDispatchToProps
)(App);

// export const HomeLink = connect(
//   mapStateToProps,
//   photosDispatchToProps
// )(Navbar);

// export const UploadLink = connect(
//   mapStateToProps,
//   photosDispatchToProps
// )(Upload);

// export const SingleLink = connect(
//   mapStateToProps,
//   photosDispatchToProps
// )(SinglePhoto);

// export const AllPhotosLink = connect(
//   mapStateToProps,
//   photosDispatchToProps
// )(AllPhotos);

// export { PhotosLink, HomeLink, UploadLink, SingleLink, AllPhotosLink };
