import { connect } from 'react-redux';

import { logoutDestroySession,
         clearErrors } from '../../actions/session_actions';

import { fetchAllPhotos,
         fetchSinglePhoto,
         receiveSinglePhoto,
         createPhoto,
         updatePhoto,
         destroyPhoto } from '../../actions/photo_actions';

import PhotoDetail from './photo_detail';


const mapStateToProps = (state) => {

  let thisPhoto;
  if (state.photos.currentPhoto) {
    thisPhoto = state.photos.byId[state.photos.currentPhoto];
  } else {
    thisPhoto = null;
  }

  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    photos: state.photos,
    currentPhoto: thisPhoto
  };
};


const mapDispatchToProps = (dispatch, { location }) => {

  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    receiveSinglePhoto: (id) => dispatch(receiveSinglePhoto(id)),
    fetchSinglePhoto: (id) => dispatch(fetchSinglePhoto(id)),
    createPhoto: (data) => dispatch(createPhoto(data)),
    updatePhoto: (data) => dispatch(updatePhoto(data)),
    destroyPhoto: (photo) => dispatch(destroyPhoto(photo)),

    logoutDestroySession: () => dispatch(logoutDestroySession()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
