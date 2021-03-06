import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
          CLEAR_ERRORS } from '../actions/session_actions';


const defaultState = Object.freeze({
    currentUser: null,
    errors: null
  });


export const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;

      return merge({}, state, {
        currentUser: currentUser,
        errors: null
      });

    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });

    case CLEAR_ERRORS:
      return merge({}, state, { errors: null });

    default:
      return state;

  }
};
