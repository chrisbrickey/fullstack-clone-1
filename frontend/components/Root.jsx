import React from 'react';
import { Provider } from 'react-redux';

import { Route,
         Redirect,
         Switch,
         Link,
         HashRouter } from 'react-router-dom';

import { App } from './App';

console.log("on the root.jsx");

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>on the root.jsx
        <Route path="/" component={App}/>
      </div>
    </HashRouter>
  </Provider>
);
