import React from 'react';
import { Provider } from 'react-redux';

import { Route,
         Redirect,
         Switch,
         Link,
         HashRouter } from 'react-router-dom';


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
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={SignupContainer} />
      </Switch>

      <Route component={EnsureLoggedInContainer}>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
        </Switch>
      </Route>
    </div>
  </div>
);
