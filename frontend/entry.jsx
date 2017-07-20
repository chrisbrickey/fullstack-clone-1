//renders the app within the root container

import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/root';
import { configureStore } from './store/store';

// import { ajaxSignup, ajaxLogin, ajaxLogout } from './util/session_api_util';
// import { receiveCurrentUser,
//          receiveErrors,
//          signupCreateUser,
//          loginCreateSession,
//          logoutDestroySession } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {

  // window.ajaxSignup = ajaxSignup;
  // window.ajaxLogin = ajaxLogin;
  // window.ajaxLogout = ajaxLogout;

  // window.receiveCurrentUser = receiveCurrentUser;
  // window.receiveErrors = receiveErrors;
  // window.signupCreateUser = signupCreateUser;
  // window.loginCreateSession = loginCreateSession;
  // window.logoutDestroySession = logoutDestroySession;


  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
