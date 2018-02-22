import { connect } from 'react-redux';

import { fetchAllUsers } from '../../actions/user_actions';

import Follow from './follow';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    photos: state.photos,
    users: state.users
  };
};


const mapDispatchToProps = (dispatch, { location }) => {

  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
