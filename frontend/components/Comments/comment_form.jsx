import React from 'react';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

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

    const newComment = merge({}, this.state);
    newComment.comment.body = event.target.value;
    this.setState(newComment);
  }

  handleSubmit(event) {

    event.preventDefault();
    this.props.createComment(this.state.comment)
      .then(
        ( () => {
          this.setState({ comment: { body: "", photo_id: this.props.thisPhotoId } });
        })
      );

  }


  render() {

    return(

        <div>
            <form >
                <label>
                    <input
                        type="text"
                        placeholder="Add a comment..."
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
                  className="edit-input"
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
