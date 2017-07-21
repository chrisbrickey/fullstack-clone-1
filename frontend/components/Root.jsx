import React from 'react';
import { Provider } from 'react-redux';

import { Route,
         Redirect,
         Switch,
         Link,
         HashRouter } from 'react-router-dom';

import { App } from './App';


export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <Route path="/" component={App}>
        </Route>
      </div>
    </HashRouter>
  </Provider>
);
