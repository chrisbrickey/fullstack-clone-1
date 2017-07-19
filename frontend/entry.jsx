//renders the app within the root container

import React from 'react';
import ReactDOM from 'react-dom';
import { ajaxSignup, ajaxLogin, ajaxLogout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  window.ajaxSignup = ajaxSignup;
  window.ajaxLogin = ajaxLogin;
  window.ajaxLogout = ajaxLogout;

  const root = document.getElementById('root');
  ReactDOM.render(<h3>Instagram...coming from entry.jsx</h3>, root);
});
