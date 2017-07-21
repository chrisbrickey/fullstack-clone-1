import React from 'react';
import { Provider } from 'react-redux';

import { Route,
         Redirect,
         Switch,
         Link,
         HashRouter } from 'react-router-dom';

import { AuthRoute,
         ProtectedRoute } from '../util/route_util';

//all container components!!
import Signup from './signup';
import SignupContainer from './signup_container';
import Home from './home';
import HomeContainer from './home_container';
import EnsureLoggedInContainer from './ensure_loggedIn_container';
import EnsureLoggedIn from './ensure_loggedIn';

console.log("on the App.jsx");

export const App = ({store}) => (
  <div>on App.jsx
    <div className="App">
      <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={SignupContainer} />
        <ProtectedRoute exact path="/" component={HomeContainer}/>
      </Switch>
    </div>
  </div>
);
