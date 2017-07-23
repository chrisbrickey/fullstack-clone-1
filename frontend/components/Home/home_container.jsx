import { connect } from 'react-redux';

import { signupCreateUser ,
         loginCreateSession,
         logoutDestroySession,
         clearErrors } from '../../actions/session_actions';

import { fetchAllPhotos } from '../../actions/photo_actions';

import Home from './home';

console.log("on the home_container.jsx");

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    photos: state.photos
  };
};
//
//remember to send clear errors down to the presentational components
const mapDispatchToProps = (dispatch, { location }) => {
  // const formType = location.pathname.slice(1);
  // const processForm = (formType === 'login') ? loginCreateSession : signupCreateUser;

  return {
    // processForm: user => dispatch(processForm(user)),
    // formType,
    // loginCreateSession: (user) => dispatch(loginCreateSession(user)),
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    logoutDestroySession: () => dispatch(logoutDestroySession()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
