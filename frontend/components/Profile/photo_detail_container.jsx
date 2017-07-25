import { connect } from 'react-redux';

import { logoutDestroySession,
         clearErrors } from '../../actions/session_actions';

import { fetchAllPhotos,
         fetchSinglePhoto,
         createPhoto,
         updatePhoto,
         destroyPhoto } from '../../actions/photo_actions';

import PhotoDetail from './photo_detail';

console.log("on the photo__detail_container.jsx");

const mapStateToProps = (state) => {

//insert logic to conditionally pass photo only if it is not null
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
//
//remember to send clear errors down to the presentational components
const mapDispatchToProps = (dispatch, { location }) => {

  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
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
