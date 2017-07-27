import { connect } from 'react-redux';

import { logoutDestroySession,
         clearErrors } from '../../actions/session_actions';

import { fetchAllPhotos,
         fetchSinglePhoto,
         receiveSinglePhoto,
         createPhoto,
         updatePhoto,
         destroyPhoto } from '../../actions/photo_actions';

import LikesDetail from './likes_detail';
// thisPhoto, thisPhotoId, createPhotoLike, destroyPhotoLike are being passed in from Home where this container is rendered


const mapStateToProps = (state) => {

  return {

  };
};


const mapDispatchToProps = (dispatch, { location }) => {
//
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesDetail);
