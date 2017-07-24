import merge from 'lodash/merge';
import { RECEIVE_ALL_PHOTOS,
         RECEIVE_SINGLE_PHOTO } from '../actions/photo_actions';

const defaultState = Object.freeze({
  currentPhoto: null,
  byPopularity: [],
  byId: null
});

export const photoReducer = (state = defaultState, action) => {
  Object.freeze(state);


  switch(action.type) {

    case RECEIVE_ALL_PHOTOS:
        console.log("inside reducer at RECEIVE_ALL_PHOTOS");

        return merge({}, state, {
          byId: action.byId
        });

    case RECEIVE_SINGLE_PHOTO:
        console.log("inside reducer at RECEIVE_SINGLE_PHOTO");

        return merge({}, state, {
          currentPhoto: action.currentPhoto,
          byId: action.byId
        });

    default:
        return state;

  }
};
