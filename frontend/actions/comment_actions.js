import { ajaxFetchComment,
         ajaxCreateComment,
         ajaxDestroyComment } from "../util/comment_api_util";


export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';



//synchronous action creators

export const receiveComment = comment => {

  return({
    type: RECEIVE_COMMENT,
    comment
  });
};


export const removeComment = comment => {

  return({
    type: REMOVE_COMMENT,
    comment: comment
  });
};



//asynchronous action creators

export const fetchComment = (id) => dispatch => {

  return ajaxFetchComment(id)
    .then( returnedComment => (dispatch(receiveComment(returnedComment)))
  );
};


export const createComment = (comment) => dispatch => {

  return ajaxCreateComment(comment)
    .then( returnedComment => (dispatch(receiveComment(returnedComment)))
  );
};


export const destroyComment = (id) => dispatch => {

  return ajaxDestroyComment(id)
    .then( commentItDeleted => (dispatch(removeComment(commentItDeleted)))
  );
};
