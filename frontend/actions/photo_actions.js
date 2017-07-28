import { ajaxFetchAllPhotos,
         ajaxFetchSinglePhoto,
         ajaxCreatePhoto,
         ajaxUpdatePhoto,
         ajaxDestroyPhoto } from "../util/photo_api_util";

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';


//synchronous action creators

export const receiveAllPhotos = photos => {

  return({
    type: RECEIVE_ALL_PHOTOS,
    byId: photos
  });
};


export const receiveSinglePhoto = photo => {

  return({
    type: RECEIVE_SINGLE_PHOTO,
    currentPhoto: photo.id,
    byId: {[photo.id]: photo}
  });
};


export const removePhoto = photo => {

  return({
    type: REMOVE_PHOTO,
    photo
  });
};



//asynchronous action creators

export const fetchAllPhotos = () => dispatch => {

  return ajaxFetchAllPhotos()
    .then( returnedPhotos => (dispatch(receiveAllPhotos(returnedPhotos)))
  );
};


export const fetchSinglePhoto = (id) => dispatch => {

  return ajaxFetchSinglePhoto(id)
    .then( returnedPhoto => (dispatch(receiveSinglePhoto(returnedPhoto)))
  );
};


export const createPhoto = (data) => dispatch => {

  return ajaxCreatePhoto(data)
    .then( returnedPhoto => (dispatch(receiveSinglePhoto(returnedPhoto)))
  );
};


export const updatePhoto = (data) => dispatch => {

  return ajaxUpdatePhoto(data)
    .then( returnedPhoto => (dispatch(receiveSinglePhoto(returnedPhoto)))
  );
};


export const destroyPhoto = (photo) => dispatch => {

  return ajaxDestroyPhoto(photo)
    .then( photoItDeleted => (dispatch(removePhoto(photoItDeleted)))
  );
};
