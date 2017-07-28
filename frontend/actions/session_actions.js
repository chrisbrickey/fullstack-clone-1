import { ajaxSignup,
         ajaxLogin,
         ajaxLogout } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


//synchronous action creators

export const receiveCurrentUser = currentUser => {

  return({
      type: RECEIVE_CURRENT_USER,
      currentUser: currentUser,
      errors: []
    });
};


export const receiveErrors = errors => {

  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const clearErrors = errors => {

  return ({
    type: CLEAR_ERRORS,
    errors: []
  });
};


//asynchronous action creators

export const signupCreateUser = user => dispatch => {

  return ajaxSignup(user)
    .then( (returnedUser => dispatch(receiveCurrentUser(returnedUser))),
           (returnedErrors => dispatch(receiveErrors(returnedErrors.responseJSON)))
    );
};

export const loginCreateSession = user => dispatch => {

  return ajaxLogin(user)
    .then( returnedUser => (dispatch(receiveCurrentUser(returnedUser))),
           returnedErrors => (dispatch(receiveErrors(returnedErrors.responseJSON)))
    );
};

// dispatching receiveCurrentUser(null) removes the current user, sets state.session to default
export const logoutDestroySession = () => dispatch => {

  ajaxLogout()
    .then( () => (dispatch(receiveCurrentUser(null)))
  );

};
