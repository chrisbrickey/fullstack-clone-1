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
import SignupContainer from './Signup/signup_container';
import HomeContainer from './Home/home_container';
import ProfileContainer from './Profile/profile_container';
import UploadContainer from './Upload/upload_container';
import PhotoDetailContainer from './Profile/photo_detail_container';
import FollowContainer from './Follow/follow_container';


export const App = ({store}) => (
  <div>
    <div className="App">

      <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={SignupContainer} />
        <ProtectedRoute exact path="/upload" component={UploadContainer}/>
        <ProtectedRoute path="/users" component={ProfileContainer}/>
        <ProtectedRoute path="/follow" component={FollowContainer}/>
        <ProtectedRoute exact path="/" component={HomeContainer}/>
      </Switch>

    </div>
  </div>
);
