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

export const App = ({store}) => (
  <div>
    <header>
      <p>...from App.jsx via Root.jsx, which was rendered in entry file</p>
    </header>

    <div>
      <Switch>
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={SignupContainer} />
        <Route exact path="/" component={SignupContainer}/>
      </Switch>
    </div>
  </div>
);
