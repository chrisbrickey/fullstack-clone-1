import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
// import Modal from 'react-modal';
import {hashHistory} from 'react-router';

class LikesDetail extends React.Component {
  constructor(props) {
    super(props);

    this.likeThisPhoto = this.likeThisPhoto.bind(this);

    // let theId;
    // if (this.props.currentPhoto) {
    //   theId = this.props.currentPhoto.id;
    // } else {
    //   theId = null;
    // }

    // this.state = {
    //   modalOpen: false,
    //   photo: {
    //     caption: "",
    //     location: "",
    //     id: theId,
    //   }
    // };
  }

  // componentDidMount() {
  //     this.props.fetchAllPhotos();
  //   }



  likeThisPhoto(event) {
    this.props.createPhotoLike(photoId);
  }


  render() {

    return(

        <div className="innerLikeContainer">

            <button
                onClick={this.props.logoutDestroySession}
                className="logout-button">
                why is logout button here?
            </button>


            <div className="likes-button">
                <button>
                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501188966/007-favorite_t5zsnu.png'}
                        alt="heart icon"
                        id="heart-icon"
                        onClick={this.likeThisPhoto}
                    />
                </button>
            </div>


            <div className="likes-count-container">
                <div id="info-likes">{photo.likesCount}</div>
                    <div id="caption-spacer"></div>
                <div id="info-likes">likes</div>
            </div>

        
        </div>

    );
  }


}

export default LikesDetail;
