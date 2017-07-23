import merge from 'lodash/merge';
import { RECEIVE_ALL_PHOTOS,
         RECEIVE_ERRORS,
         RECEIVE_SINGLE_PHOTO } from '../actions/photo_actions';

const defaultState = Object.freeze({
  currentPhoto: null,
  byPopularity: [],
  byId: null
});

export const photoReducer = (state = defaultState, action) => {
  Object.freeze(state);
  return state;
};
