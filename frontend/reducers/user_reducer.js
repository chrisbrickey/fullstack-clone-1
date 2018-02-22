import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const defaultState = Object.freeze({
  loggedInUser: null,
  byId: null
});

export const userReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {

    case RECEIVE_ALL_USERS:
      // const loggedInUser = action.loggedInUser;

      return merge({}, state, {
        // loggedInUser: loggedInUser,
        byId: action.byId
      });

    default:
      return state;

  }
};
