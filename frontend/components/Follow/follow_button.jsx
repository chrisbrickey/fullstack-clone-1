import React from 'react';
import merge from 'lodash/merge';
// import {hashHistory} from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    }
  //
  //   this.editComment = this.editComment.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  //
  //
  // editComment(event) {
  //
  //   const newComment = merge({}, this.state);
  //   newComment.comment.body = event.target.value;
  //   this.setState(newComment);
  // }
  //
  // handleSubmit(event) {
  //
  //   event.preventDefault();
  //   this.props.createComment(this.state.comment)
  //     .then(
  //       ( () => {
  //         this.setState({ comment: { body: "", photo_id: this.props.thisPhotoId } });
  //       })
  //     );
  //
  // }
  //
  //
  render() {

    console.log(this.props);

    return(

        <div>
            I'm in the FollowButton component
        </div>

    );
  }


}

export default FollowButton;
