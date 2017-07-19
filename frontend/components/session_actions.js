import { ajaxSignup, ajaxLogin, ajaxLogout } from "./../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


//synchronous action creators

export const receiveCurrentUser = currentUser => {
  console.log("inside sync receiveCurrentUser");
  return({
      type: RECEIVE_CURRENT_USER,
      currentUser  //shorthand for currentUser: currentUser
    });
};

//errors from the controller are formatted like this:
    // json: { errors: ["invalid username/password combination"] },
    // status: 401
export const receiveErrors = errors => {
  console.log("inside sync receiveErrors");
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};


//asynchronous action creators

export const signupCreateUser = user => dispatch => {
  console.log("inside signupCreateUser");

  ajaxSignup(user)
    .then( returnedUser => (dispatch(receiveCurrentUser(returnedUser))),
           returnedErrors => (receiveErrors(returnedErrors.responseJSON))
    );
};

export const loginCreateSession = user => dispatch => {
  console.log("inside loginCreateSession");

  ajaxLogin(user)
    .then( returnedUser => (dispatch(receiveCurrentUser(returnedUser))),
           returnedErrors => (dispatch(receiveErrors(returnedErrors.responseJSON)))
    );
};

// dispatching receiveCurrentUser(null) removes the current user, sets state.session to default
export const logoutDestroySession = () => dispatch => {
  console.log("inside logoutDestroySession");

  ajaxLogout()
    .then( () => (dispatch(receiveCurrentUser(null))));
};
