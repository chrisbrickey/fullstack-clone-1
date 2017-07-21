import { connect } from 'react-redux';

import { signupCreateUser ,
         loginCreateSession,
         logoutDestroySession,
         clearErrors } from '../actions/session_actions';

import EnsureLoggedIn from './ensure_loggedIn.jsx';

console.log("on the ensure_loggedIn_container");

const mapStateToProps = ({ session }, ownProps) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    errors: session.errors,
    currentURL: ownProps.location.pathname
  };
};
// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? loginCreateSession : signupCreateUser;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    loginCreateSession: (user) => dispatch(loginCreateSession(user)),
    logoutDestroySession: () => dispatch(logoutDestroySession()),
    clearErrors: () => dispatch(clearErrors())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnsureLoggedIn);
