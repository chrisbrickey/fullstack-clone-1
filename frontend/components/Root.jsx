import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './app';

console.log ("on the root.jsx");

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
