import { ajaxCreateFollow,
         ajaxDestroyFollow } from "../util/follow_api_util";


export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';


//synchronous action creators

export const receiveFollow = follow => {

  return({
    type: RECEIVE_FOLLOW,
    follow
  });
};


export const removeFollow = follow => {

  return({
    type: REMOVE_FOLLOW,
    follow
  });
};



//asynchronous action creators

export const createFollow = (followingId) => dispatch => {

  return ajaxCreateFollow(followingId)
    .then( returnedFollow => (dispatch(receiveFollow(returnedFollow)))
  );
};


export const destroyFollow = (followId) => dispatch => {

  return ajaxDestroyFollow(followId)
    .then( followItDeleted => (dispatch(removeFollow(followItDeleted)))
  );
};
