import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'lodash/merge';
// import {hashHistory} from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   followBoolean: this.props.followedByCurrent,
    //   currentUser: this.props.currentUser,
    //   userToFollow: this.props.userIdToFollow
    // };

    this.followThisUser = this.followThisUser.bind(this);
    this.unfollowThisUser = this.unfollowThisUser.bind(this);
    this.displayFollowButton = this.displayFollowButton.bind(this);
    // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  // forceUpdateHandler(){
  //   this.forceUpdate();
  // }

  // componentWillReceiveProps(nextProps) {
  //   const updatedStatus = merge({}, this.state);
  //   updatedStatus.followBoolean = true;
  //   this.setState(updatedStatus);
  // }


  followThisUser(event) {
    this.props.createFollow(this.props.userIdToFollow);
    // const updatedStatus = merge({}, this.state);
    // updatedStatus.followBoolean = true;
    // this.setState(updatedStatus);

    // this.setState({followBoolean: true});//not working
    // React.render();
    // ReactDOM.render(); not working
    // this.forceUpdateHandler(); not working
    // this.forceUpdate(); not working

    // .then(
    //   ( () => {
    //     //below code updates the state which should trigger re-rendering but it is not; same result when not using callback
    //     const updatedStatus = merge({}, this.state);
    //     updatedStatus.followBoolean = true;
    //     this.setState(updatedStatus);
    //     // this.forceUpdate(); not working
    //     // this.render(); not working
    //   })
    // );

    //   return (
    //     <FollowButton
    //         followedByCurrent={true}
    //         currentUser={this.props.currentUser}
    //         userIdToFollow={this.props.currentUser.id}
    //         createFollow={this.props.createFollow}
    //         destroyFollow={this.props.destroyFollow}
    //     />
    //
    // );

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
               className="button-to-unfollow-user">
               Following
             </button>

       );
    } else {
      return(

            <button
              onClick={this.followThisUser}
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
