import React from 'react';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

class LikesDetail extends React.Component {
  constructor(props) {
    super(props);

    this.likeThisPhoto = this.likeThisPhoto.bind(this);
    this.unlikeThisPhoto = this.unlikeThisPhoto.bind(this);
    this.displayLikeButton = this.displayLikeButton.bind(this);
  }

  likeThisPhoto(event) {
    this.props.createPhotoLike(this.props.thisPhotoId);
  }

  unlikeThisPhoto(event) {
    this.props.destroyPhotoLike(this.props.thisPhotoId);
  }

  displayLikeButton() {

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

    let likesWord;
    if (this.props.thisPhoto.likesCount === 1) {
      likesWord = "like";
    } else {
      likesWord = "likes";
    }

    return(

        <div className="innerLikeContainer">
            <div className="likes-button">
              {this.displayLikeButton()}
            </div>

              <div className="likes-count-container">
                  <div id="info-likes" className="item-at-bottom">{this.props.thisPhoto.likesCount}</div>
                      <div id="caption-spacer"></div>
                  <div id="info-likes" className="item-at-bottom">{likesWord}</div>
              </div>


        </div>

    );
  }


}

export default LikesDetail;
