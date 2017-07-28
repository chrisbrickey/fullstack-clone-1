import React from 'react';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

// thisPhoto, thisPhotoId, fetchComment, createComment, destroyComment, currentUser are being passed in from Home where this component's container is rendered

class Comments extends React.Component {
  constructor(props) {
    super(props);

  }





  render() {

    // console.log("this.props", this.props);

    let arrayOfComments = this.props.thisPhoto.comments;

    let commentsToRender = arrayOfComments.map( (comment) => {

      return(
        <div key={comment.id} className="single-comment-container">
          <div id="commenter">{comment.username}</div>
          <div id="comment-spacer"></div>
          <div id="comment-body">{comment.body}</div>
        </div>
      );
    });

    return(

        <div className="innerLikeContainer">
              <div>{commentsToRender}</div>
        </div>

    );
  }


}

export default Comments;
