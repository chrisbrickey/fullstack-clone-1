import { connect } from 'react-redux';

import { signupCreateUser ,
         loginCreateSession,
         logoutDestroySession,
         clearErrors } from '../actions/session_actions';

import Signup from './signup';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    errors: session.errors
  };
};
//
//remember to send clear errors down to the presentational components
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
)(Signup);
