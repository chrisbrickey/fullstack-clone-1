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
    console.log("inside likeThisPhoto on same file working on photoId:", this.props.thisPhotoId);
    console.log("...and this is the current state of that photo:", this.props.thisPhoto);

    this.props.createPhotoLike(this.props.thisPhotoId);
  }

  unlikeThisPhoto(event) {
    console.log("inside unlikeThisPhoto on same file working on photoId:", this.props.thisPhotoId);
    console.log("...and this is the current state of that photo:", this.props.thisPhoto);

    this.props.destroyPhotoLike(this.props.thisPhotoId);
  }



  displayLikeButton() {
    console.log(this.props.thisPhoto.likedByCurrentUser);
    if (this.props.thisPhoto.likedByCurrentUser) {
       return(

         <div className="unlikes-button">
             <button>Unlike Button
                 <img
                     src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501199362/011-hearts_c0p7ac.png'}
                     alt="red heart icon"
                     id="heart-icon"
                     onClick={this.unlikeThisPhoto}
                 />
             </button>
         </div>

       );
    } else {
      return(



        <div className="likes-button">
            <button>Like Button
                <img
                    src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1501188966/007-favorite_t5zsnu.png'}
                    alt="black heart icon"
                    id="heart-icon"
                    onClick={this.likeThisPhoto}
                />
            </button>
        </div>


      );
    }
  }


  render() {

    return(

        <div className="innerLikeContainer">


          {this.displayLikeButton()}
            <div id="caption-spacer"></div>




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
