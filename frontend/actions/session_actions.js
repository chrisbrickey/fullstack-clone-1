import { ajaxSignup,
         ajaxLogin,
         ajaxLogout } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


//synchronous action creators

export const receiveCurrentUser = currentUser => {
  console.log("inside sync receiveCurrentUser");
  console.log(currentUser);
  return({
      type: RECEIVE_CURRENT_USER,
      currentUser: currentUser,  //shorthand for currentUser: currentUser
      errors: []  //I added this to clear the errors at log in.  Is this ok to do?
    });
};

//errors from the controller are formatted like this:
    // json: { errors: ["invalid username/password combination"] },
    // status: 401
export const receiveErrors = errors => {
  console.log("inside sync receiveErrors");
  console.log(errors);
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const clearErrors = errors => {
  console.log("inside sync clearErrors");
  return ({
    type: CLEAR_ERRORS,
    errors: []
  });
};


//asynchronous action creators

export const signupCreateUser = user => dispatch => {
  console.log("inside signupCreateUser");
  console.log(user);

  ajaxSignup(user)
    .then( (returnedUser => dispatch(receiveCurrentUser(returnedUser))),
           (returnedErrors => dispatch(receiveErrors(returnedErrors.responseJSON)))
    );
};

export const loginCreateSession = user => dispatch => {
  console.log("inside loginCreateSession");
  console.log(user);

  ajaxLogin(user)
    .then( returnedUser => (dispatch(receiveCurrentUser(returnedUser))),
           returnedErrors => (dispatch(receiveErrors(returnedErrors.responseJSON)))
    );
};

// dispatching receiveCurrentUser(null) removes the current user, sets state.session to default
export const logoutDestroySession = () => dispatch => {
  console.log("inside logoutDestroySession");

  ajaxLogout()
    .then( () => (dispatch(receiveCurrentUser(null)))
  );
};