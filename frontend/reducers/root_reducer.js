import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { photoReducer } from './photo_reducer';

console.log('inside the rootReducer');

export const rootReducer = combineReducers ({
  session: sessionReducer,
  photos: photoReducer
});
