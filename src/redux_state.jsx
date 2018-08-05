import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { listObjects, saveObject } from "./utils/index";

const initialState = {
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: undefined,
};

/////////////////////
// ACTION CREATORS //
/////////////////////

//4 creators

export const getAllPhotos = (photos) => {
  return {
    type: "GET_ALL_PHOTOS",
    photos,
  };
};

export const goHome = () => {
  return {
    type: "GO_HOME",
  };
};

export const uploadPic = (saved) => {
  return {
    type: "UPLOAD_PIC",
    saved,
  };
};

export const selectPhoto = (key) => {
  return {
    type: "SELECT_PHOTO",
    key,
  };
};

// Async functions
export const listPhotos = () => {
  return function(dispatch) {
    return listObjects().then((photos) => {
      dispatch(getAllPhotos(photos));
    });
  };
};

export const uploader = (file) => {
  return (dispatch) => {
    if (!file) return;
    return saveObject(file).then((saved) => {
      dispatch(uploadPic(saved));
    });
  };
};
/////////////////////
//     REDUCER     //
/////////////////////
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PHOTOS": {
      const clone = Object.assign({}, state, { photos: action.photos });
      return clone;
    }
    case "GO_HOME": {
      const obj = {
        currentView: "AllPhotos",
      };
      const clone = Object.assign({}, state, obj);
      return clone;
    }
    case "UPLOAD_PIC": {
      const clone = Object.assign({}, state, {
        photos: [...state.photos, action.saved],
      });
      // clone.photos.push(action.saved);
      // clone.photos = [...clone.photos, action.saved]
      return clone;
    }
    case "SELECT_PHOTO": {
      const obj = {
        selectedPhoto: action.key,
        currentView: action.key,
      };
      const clone = Object.assign({}, state, obj);
      return clone;
    }
  }
  return state;
};

export const store = createStore(reducer, applyMiddleware(thunk));
