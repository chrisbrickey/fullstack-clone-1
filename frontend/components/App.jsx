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
import Signup from './Signup/signup';
import SignupContainer from './Signup/signup_container';
import Home from './Home/home';
import HomeContainer from './Home/home_container';
import Profile from './Profile/profile';
import ProfileContainer from './Profile/profile_container';
import Upload from './Upload/upload';
import UploadContainer from './Upload/upload_container';

export const App = ({store}) => (
  <div>
    <div className="App">
      <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={SignupContainer} />
        <ProtectedRoute exact path="/" component={HomeContainer}/>
        <ProtectedRoute exact path="/upload" component={UploadContainer}/>
        <ProtectedRoute path="/users" component={ProfileContainer}/>
      </Switch>
    </div>
  </div>
);
