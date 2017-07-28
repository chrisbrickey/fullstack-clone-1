import React from 'react';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

// thisPhoto, thisPhotoId, createPhotoLike, destroyPhotoLike, currentUser are being passed in from Home where this component's container is rendered

class LikesDetail extends React.Component {
  constructor(props) {
    super(props);

    this.likeThisPhoto = this.likeThisPhoto.bind(this);
    this.unlikeThisPhoto = this.unlikeThisPhoto.bind(this);
    this.displayLikeButton = this.displayLikeButton.bind(this);
  }

  likeThisPhoto(event) {
    // console.log("inside likeThisPhoto on same file working on photoId:", this.props.thisPhotoId);
    // console.log("...and this is the current state of that photo:", this.props.thisPhoto);

    this.props.createPhotoLike(this.props.thisPhotoId);
  }

  unlikeThisPhoto(event) {
    // console.log("inside unlikeThisPhoto on same file working on photoId:", this.props.thisPhotoId);
    // console.log("...and this is the current state of that photo:", this.props.thisPhoto);

    this.props.destroyPhotoLike(this.props.thisPhotoId);
  }



  displayLikeButton() {
    // console.log(this.props.thisPhoto.likedByCurrentUser);
    if (this.props.thisPhoto.likedByCurrentUser) {
       return(

             <button>
                 <img
                     src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501199362/011-hearts_c0p7ac.png'}
                     alt="red heart icon"
                     id="heart-icon"
                     onClick={this.unlikeThisPhoto}
                 />
             </button>

       );
    } else {
      return(

            <button>
                <img
                    src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501188966/007-favorite_t5zsnu.png'}
                    alt="black heart icon"
                    id="heart-icon"
                    onClick={this.likeThisPhoto}
                />
            </button>

      );
    }
  }


  render() {

    return(

        <div className="innerLikeContainer">
            <div className="likes-button">
              {this.displayLikeButton()}
            </div>

              <div className="likes-count-container">
                  <div id="info-likes" className="item-at-bottom">{this.props.thisPhoto.likesCount}</div>
                      <div id="caption-spacer"></div>
                  <div id="info-likes" className="item-at-bottom">likes</div>
              </div>


        </div>

    );
  }


}

export default LikesDetail;
