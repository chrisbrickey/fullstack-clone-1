//renders the app within the root container

import React from 'react';
import ReactDOM from 'react-dom';

// import { ajaxSignup, ajaxLogin, ajaxLogout } from './util/session_api_util';
import { receiveCurrentUser,
         receiveErrors,
         signupCreateUser,
         loginCreateSession,
         logoutDestroySession } from './actions/session_actions';
import { configureStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  // window.ajaxSignup = ajaxSignup;
  // window.ajaxLogin = ajaxLogin;
  // window.ajaxLogout = ajaxLogout;

  window.receiveCurrentUser = receiveCurrentUser;
  window.receiveErrors = receiveErrors;
  window.signupCreateUser = signupCreateUser;
  window.loginCreateSession = loginCreateSession;
  window.logoutDestroySession = logoutDestroySession;


  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<h3>Instagram...coming from entry.jsx</h3>, root);
});
