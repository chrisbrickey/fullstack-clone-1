import { connect } from 'react-redux';

import { logoutDestroySession,
         clearErrors } from '../../actions/session_actions';

import { fetchAllPhotos,
         fetchSinglePhoto,
         createPhoto,
         updatePhoto,
         destroyPhoto } from '../../actions/photo_actions';

import Upload from './upload';
import UploadButton from './uploadButton';

console.log("on the upload_container.jsx");

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
)(Upload);
