import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';

console.log('inside the rootReducer');

export const rootReducer = combineReducers ({
  session: sessionReducer
});
