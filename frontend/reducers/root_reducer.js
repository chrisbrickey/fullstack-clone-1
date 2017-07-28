import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { photoReducer } from './photo_reducer';

export const rootReducer = combineReducers ({
  session: sessionReducer,
  photos: photoReducer
});
