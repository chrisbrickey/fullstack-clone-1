import React from 'react';

import { Route,
         Redirect,
         Switch,
         Link} from 'react-router-dom';


//container components
import Signup from './signup';
import SignupContainer from './signup_container';

console.log ("on the app.jsx");



export const App = () => (
  <div>
    <header>
      <p>...from App.jsx via Root.jsx, which was rendered in entry file</p>
    </header>
    <div>
      <SignupContainer />
    </div>

    // <Switch>
    //   <Route exact path="/hello" component={Signup} />
    //   <Route path="/" />
    // </Switch>
  </div>
);
