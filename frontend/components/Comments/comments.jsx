import React from 'react';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

// thisPhoto, thisPhotoId, createComment, destroyComment, currentUser are being passed in from Home where this component's container is rendered

class Comments extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {

    // console.log("this.props", this.props);

    let arrayOfComments = this.props.thisPhoto.comments;
    // console.log(arrayOfComments);

    let commentsToRender = arrayOfComments.map( (comment) => {
      console.log(comment);

      console.log("comment.username", comment.username);
      return(
        <div key={comment.id} className="single-comment-container">
          <div className="commenter">{comment.username}</div>
          <div className="comment-body">{comment.body}</div>
        </div>
      );
    });

    return(

        <div className="innerLikeContainer">
            <div className="likes-button">

            </div>

              <div className="likes-count-container">
                  <div id="info-comments" className="item-at-bottom"></div>
                      <div id="caption-spacer">{commentsToRender}</div>
                  <div id="info-comments" className="item-at-bottom"></div>
              </div>


        </div>

    );
  }


}

export default Comments;
