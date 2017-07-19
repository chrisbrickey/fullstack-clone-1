//keeps track of current user and error messages

import merge from 'loadsh/merge';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from './../actions/session_actions';

const defaultState = Object.freeze({
  session: {
    currentUser: null,
    errors: ["Invalid login credentials"]
  },
});

export const sesionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);

    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);

    default:
      return state;

  }
};
