import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

class Follow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchAllUsers();
  }

  render() {

    const userFeedObject = this.props.users.byId;
    let userList = null;

    if (userFeedObject) {
      let userFeedArray = Object.values(userFeedObject);

      userList = userFeedArray.map( (userObject) => {
        if (userObject.id === this.props.currentUser.id) {
          return (
            <li key={userObject.id} className="empty-feedItem-container">
            </li>
          );
        } else {
          return (
              <li key={userObject.id} className="feedItem-container">
                  <div className="subcontainer">
                      <img className="profile-photo"
                          src={userObject.profileImgUrl}
                          alt="user photo"
                      />

                      <div className="info-username">{userObject.username}</div>
                      <div className="info-tagline">{userObject.tagline}</div>
                      <div className="info-followerCount"># of Followers: {userObject.followersCount}</div>
                  </div>
              </li>
          );
        }

      });

    }


    return (
      <div className="follow-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>

          <main className="follow-sub-container">
              <div className="sub-sub-container">
                  <ul className="followFeed">
                    {userList}
                  </ul>
              </div>
            </main>

          <FooterXXX/>

      </div>

    );

  }


}

export default Follow;
