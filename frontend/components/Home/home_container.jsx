import { connect } from 'react-redux';

import { logoutDestroySession,
         clearErrors } from '../../actions/session_actions';

import { fetchAllPhotos } from '../../actions/photo_actions';

import Home from './home';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    photos: state.photos
  };
};


const mapDispatchToProps = (dispatch, { location }) => {

  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    logoutDestroySession: () => dispatch(logoutDestroySession()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
