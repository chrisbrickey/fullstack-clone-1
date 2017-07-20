import { connect } from 'react-redux';

// import { login, logout, signup } from '../../actions/session_actions';
import Signup from './signup';

console.log("on the signup container");

const mapStateToProps = ({ session }) => {
  // return {
  //   loggedIn: Boolean(session.currentUser),
  //   errors: session.errors
  // }
};
//
//remember to send clear errors down to the presentational components
const mapDispatchToProps = (dispatch, { location }) => {
//   const formType = location.pathname.slice(1);
//   const processForm = (formType === 'login') ? login : signup;
//   return {
//     processForm: user => dispatch(processForm(user)),
//     formType
//   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
