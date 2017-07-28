import React from 'react';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

// thisPhoto, thisPhotoId, fetchComment, createComment, destroyComment, currentUser are being passed in from Home where this component's container is rendered

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        body: "",
        photo_id: this.props.thisPhotoId,
      }
    };

    this.editComment = this.editComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  editComment(event) {
    console.log("inside editComment on CommentForm");

    const newComment = merge({}, this.state);
    newComment.comment.body = event.target.value;
    this.setState(newComment);
  }

  handleSubmit(event) {
    console.log("inside handleSubmit on CommentForm");

    event.preventDefault();
    this.props.createComment(this.state.comment)
      .then(
        ( () => {
          console.log("inside callback for createComment");
          this.setState({ comment: { body: "", photo_id: this.props.thisPhotoId } });
        })
      );

  }


  render() {

    // console.log("this.props", this.props);

    return(

        <div>
            <form >
                <label>
                    <input
                        type="text"
                        placeholder="Add Comment"
                        value={this.state.comment.body}
                        onChange={this.editComment}
                        className="edit-input"
                        id="comment-input"
                    />
                </label>

                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  value="Submit"
                  className="edit-submit"
                  id="comment-submit"
                  >
                  Post It
                </button>
            </form>


            
        </div>

    );
  }


}

export default CommentForm;
