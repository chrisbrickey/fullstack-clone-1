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

export const App = ({store}) => (
  <div>
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={SignupContainer} />
        <Route exact path="/" component={HomeContainer}/>
      </Switch>
    </div>
  </div>
);
