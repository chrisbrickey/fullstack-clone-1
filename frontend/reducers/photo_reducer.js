import merge from 'lodash/merge';
import { RECEIVE_ALL_PHOTOS,
         RECEIVE_SINGLE_PHOTO,
         REMOVE_PHOTO } from '../actions/photo_actions';

const defaultState = Object.freeze({
  currentPhoto: null,
  byPopularity: [],
  byId: null
});

export const photoReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;


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

    case REMOVE_PHOTO:
        console.log("inside reducer at REMOVE_PHOTO");

        newState = merge({}, state);
        delete newState.byId[action.photo.id];
        newState.currentPhoto = null;
        return newState;

    default:
        return state;

  }
};
