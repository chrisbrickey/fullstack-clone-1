import { ajaxCreatePhotoLike,
         ajaxDestroyPhotoLike } from "../util/like_api_util";


export const RECEIVE_PHOTO_LIKE = 'RECEIVE_PHOTO_LIKE';
export const REMOVE_PHOTO_LIKE = 'REMOVE_PHOTO_LIKE';


//synchronous action creators

export const receivePhotoLike = photoLike => {

  return({
    type: RECEIVE_PHOTO_LIKE,
    photoLike
  });
};


export const removePhotoLike = photoLike => {

  return({
    type: REMOVE_PHOTO_LIKE,
    photoLike
  });
};



//asynchronous action creators

export const createPhotoLike = (photoId) => dispatch => {

  return ajaxCreatePhotoLike(photoId)
    .then( returnedPhotoLike => (dispatch(receivePhotoLike(returnedPhotoLike)))
  );
};


export const destroyPhotoLike = (photoId) => dispatch => {

  return ajaxDestroyPhotoLike(photoId)
    .then( photoLikeItDeleted => (dispatch(removePhotoLike(photoLikeItDeleted)))
  );
};
