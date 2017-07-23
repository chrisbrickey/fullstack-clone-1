import { ajaxFetchAllPhotos } from "../util/photo_api_util";

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';


//synchronous action creators

export const receiveAllPhotos = photos => {
  console.log("inside sync receiveAllPhotos");
  console.log(photos);
  return({
    type: RECEIVE_ALL_PHOTOS,
    byId: photos
  });
};

export const receiveSinglePhoto = photo => {

};



//asynchronous action creators

export const fetchAllPhotos = () => dispatch => {
  console.log("in async fetchAllPhotos");

  return ajaxFetchAllPhotos()
    .then( returnedPhotos => (dispatch(receiveAllPhotos(returnedPhotos)))
  );
};
