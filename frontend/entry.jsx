//renders the app within the root container

import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/Root';
import { configureStore } from './store/store';


//auth development
// import { ajaxSignup,
//          ajaxLogin,
//          ajaxLogout } from './util/session_api_util';
//
// import { receiveCurrentUser,
//          receiveErrors,
//          signupCreateUser,
//          loginCreateSession,
//          logoutDestroySession } from './actions/session_actions';


//photo development
import { ajaxFetchAllPhotos,
         ajaxFetchSinglePhoto } from './util/photo_api_util';

import {ajaxFetchAllUsers,
        ajaxFetchSingleUser } from './util/user_api.util';

import { receiveAllPhotos,
         receiveSinglePhoto,
         fetchAllPhotos } from './actions/photo_actions';


document.addEventListener('DOMContentLoaded', () => {

  // window.ajaxSignup = ajaxSignup;
  // window.ajaxLogin = ajaxLogin;
  // window.ajaxLogout = ajaxLogout;
  //
  // window.receiveCurrentUser = receiveCurrentUser;
  // window.receiveErrors = receiveErrors;
  // window.signupCreateUser = signupCreateUser;
  // window.loginCreateSession = loginCreateSession;
  // window.logoutDestroySession = logoutDestroySession;


  // window.ajaxFetchAllPhotos = ajaxFetchAllPhotos;
  window.ajaxFetchSinglePhoto = ajaxFetchSinglePhoto;

  window.receiveAllPhotos = receiveAllPhotos;
  window.receiveSinglePhoto = receiveSinglePhoto;
  window.fetchAllPhotos = fetchAllPhotos;

  window.ajaxFetchAllUsers = ajaxFetchAllUsers;
  window.ajaxFetchSingleUser = ajaxFetchSingleUser;


  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
