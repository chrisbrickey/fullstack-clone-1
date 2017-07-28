import { connect } from 'react-redux';

import { logoutDestroySession,
         clearErrors } from '../../actions/session_actions';

import { fetchAllPhotos } from '../../actions/photo_actions';

import { createPhotoLike,
         destroyPhotoLike } from '../../actions/photo_like_actions';

import { createComment,
          destroyComment } from '../../actions/comment_actions';

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
    createPhotoLike: (photoId) => dispatch(createPhotoLike(photoId)),
    destroyPhotoLike: (photoId) => dispatch(destroyPhotoLike(photoId)),
    createComment: (comment) => dispatch(createComment(comment)),
    destroyComment: (comment) => dispatch(createComment(comment)),

    logoutDestroySession: () => dispatch(logoutDestroySession()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
