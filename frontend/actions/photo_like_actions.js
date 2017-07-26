import { ajaxCreatePhotoLike,
         ajaxDestroyPhotoLike } from "../util/like_api_util";


export const RECEIVE_PHOTO_LIKE = 'RECEIVE_PHOTO_LIKE';
export const REMOVE_PHOTO_LIKE = 'REMOVE_PHOTO_LIKE';


//synchronous action creators

export const receivePhotoLike = photoLike => {
  console.log("inside sync receivePhotoLike");
  console.log(photoLike);

  return({
    type: RECEIVE_PHOTO_LIKE,
    photoLike
  });
};


export const removePhotoLike = photoLike => {
  console.log("inside sync removePhotoLike");
  console.log(photoLike);

  return({
    type: REMOVE_PHOTO_LIKE,
    photoLike
  });
};



//asynchronous action creators

export const createPhotoLike = (photoId) => dispatch => {
  console.log("in async createPhotoLike");

  return ajaxCreatePhotoLike(photoId)
    .then( returnedPhotoLike => (dispatch(receivePhotoLike(returnedPhotoLike)))
  );
};


export const destroyPhotoLike = (photoId) => dispatch => {
  console.log("in async destroyPhotoLike");

  return ajaxDestroyPhotoLike(photoId)
    .then( photoLikeItDeleted => (dispatch(removePhotoLike(photoLikeItDeleted)))
  );
};
