import React from 'react';

import { Route,
         Redirect,
         Switch,
         Link} from 'react-router-dom';


//all container components!!
import Signup from './signup';
import SignupContainer from './signup_container';

export const App = () => (
  <div>
    <header>
      <p>...from App.jsx via Root.jsx, which was rendered in entry file</p>
    </header>
    <div>

      <Switch>
        <Route exact path="/hello" component={SignupContainer} />
        <Route path="/" />
      </Switch>
    </div>
  </div>
);
