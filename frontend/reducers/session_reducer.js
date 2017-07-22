//keeps track of current user and error messages

import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
          CLEAR_ERRORS } from '../actions/session_actions';


const defaultState = Object.freeze({
    currentUser: null,
    errors: null
  });


//double check format of action.current user to make it sure merging will work
export const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {

    //do I need to clear the errors here instead of on the incoming action???
    case RECEIVE_CURRENT_USER:
      console.log("inside reducer at RECEIVE_CURRENT_USER");
      const currentUser = action.currentUser;
      console.log(currentUser);
      // let errors1 = action.errors;
      //{ currentUser } pulls a key 'currentUser:' out in front of the actual object so can append a new slice to state (not just appending three keys of username/name/pw)
      return merge({}, state, {
        currentUser: currentUser,
        errors: null
      });

    case RECEIVE_ERRORS:
      console.log("inside reducer at RECEIVE_ERRORS");
      // let errors2 = action.errors;
      return merge({}, state, { errors: action.errors });

    case CLEAR_ERRORS:
      console.log("inside reducer at CLEAR_ERRORS");
      console.log(action.errors);
      // let errors3 = action.errors;
      console.log(merge({}, state, { errors: null }));
      return merge({}, state, { errors: null });


    default:
      return state;

  }
};
