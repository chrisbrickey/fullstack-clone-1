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
         ajaxCreatePhoto,
         ajaxFetchSinglePhoto } from './util/photo_api_util';

import {ajaxFetchAllUsers,
        ajaxFetchSingleUser } from './util/user_api_util';

import { receiveAllPhotos,
         receiveSinglePhoto,
         fetchAllPhotos,
         fetchSinglePhoto,
         createPhoto,
         updatePhoto,
         destroyPhoto } from './actions/photo_actions';

import { ajaxCreateLike,
         ajaxDestroyLike } from './util/like_api_util';


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
  // window.ajaxFetchSinglePhoto = ajaxFetchSinglePhoto;
  //
  // window.receiveAllPhotos = receiveAllPhotos;
  // window.receiveSinglePhoto = receiveSinglePhoto;
  // window.fetchAllPhotos = fetchAllPhotos;
  // window.fetchSinglePhoto = fetchSinglePhoto;
  // window.createPhoto = createPhoto;
  // window.updatePhoto = updatePhoto;
  // window.destroyPhoto = destroyPhoto;
  //
  // window.ajaxFetchAllUsers = ajaxFetchAllUsers;
  // window.ajaxFetchSingleUser = ajaxFetchSingleUser;

    window.ajaxCreateLike = ajaxCreateLike;
    window.ajaxDestroyLike = ajaxDestroyLike;


  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
