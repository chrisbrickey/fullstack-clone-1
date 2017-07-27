import React from 'react';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

// thisPhoto, thisPhotoId, createPhotoLike, destroyPhotoLike are being passed in from Home where this component's container is rendered

class LikesDetail extends React.Component {
  constructor(props) {
    super(props);

    this.likeThisPhoto = this.likeThisPhoto.bind(this);
    this.unlikeThisPhoto = this.unlikeThisPhoto.bind(this);
  }

  // componentDidMount() {
  //     this.props.fetchAllPhotos();
  //   }


  likeThisPhoto(event) {
    this.props.createPhotoLike(this.props.thisPhotoId);
  }

  unlikeThisPhoto(event) {
    this.props.destroyPhotoLike(this.props.thisPhotoId);
  }


  render() {
      console.log(this.props);
    // console.log(this.props.thisPhoto);
    // console.log(this.props.thisPhotoId);

    return(

        <div className="innerLikeContainer">

            <div className="likes-button">
                <button>
                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501188966/007-favorite_t5zsnu.png'}
                        alt="heart icon"
                        id="heart-icon"
                        onClick={this.likeThisPhoto}
                    />
                </button>

                <button>
                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501199362/011-hearts_c0p7ac.png'}
                        alt="heart icon"
                        id="heart-icon"
                        onClick={this.unlikeThisPhoto}
                    />
                </button>


            </div>


            <div className="likes-count-container">
                <div id="info-likes">{this.props.thisPhoto.likesCount}</div>
                    <div id="caption-spacer"></div>
                <div id="info-likes">likes</div>
            </div>


        </div>

    );
  }


}

export default LikesDetail;
