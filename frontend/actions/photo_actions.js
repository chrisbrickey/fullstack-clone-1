import { ajaxFetchAllPhotos,
         ajaxFetchSinglePhoto,
         ajaxCreatePhoto } from "../util/photo_api_util";

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
  console.log("inside sync receiveSinglePhoto");
  console.log(photo);
  return({
    type: RECEIVE_SINGLE_PHOTO,
    currentPhoto: photo.id,
    byId: photo
  });
};



//asynchronous action creators

export const fetchAllPhotos = () => dispatch => {
  console.log("in async fetchAllPhotos");

  return ajaxFetchAllPhotos()
    .then( returnedPhotos => (dispatch(receiveAllPhotos(returnedPhotos)))
  );
};


export const fetchSinglePhoto = (id) => dispatch => {
  console.log("in async fetchSinglePhoto");

  return ajaxFetchSinglePhoto(id)
    .then( returnedPhoto => (dispatch(receiveSinglePhoto(returnedPhoto)))
  );
};


export const createPhoto = (data) => dispatch => {
  console.log("in async createPhoto");

  return ajaxCreatePhoto(data)
    .then( returnedPhoto => (dispatch(receiveSinglePhoto(returnedPhoto)))
  );
};
