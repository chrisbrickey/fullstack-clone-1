import React from 'react';
import merge from 'lodash/merge';
// import {hashHistory} from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.followThisUser = this.followThisUser.bind(this);
    this.unfollowThisUser = this.unfollowThisUser.bind(this);
    this.displayFollowButton = this.displayFollowButton.bind(this);
  }

  followThisUser(event) {
    this.props.createFollow(this.props.userIdToFollow);
  }

  unfollowThisUser(event) {
    // let followId = do a query to find the follow id based on current user and user to be followed
    // OR redefine destroyFollow in the actions/utils/etc so that it takes a user id instead of followid
    // this.props.destroyFollow(followId);
  }

  displayFollowButton() {

    if (this.props.followedByCurrent) {
       return(

             <button
               onClick={this.unfollowThisUser}
               type="submit"
               value="Submit"
               className="button-to-unfollow-user">
               Following
             </button>

       );
    } else {
      return(

            <button
              onClick={this.followThisUser}
              type="submit"
              value="Submit"
              className="button-to-follow-user">
              Follow
            </button>

      );
    }
  }


  render() {

    return(

        <div>
            <div>{this.displayFollowButton()}</div>
            <div></div>
        </div>

    );

  }

}

export default FollowButton;
