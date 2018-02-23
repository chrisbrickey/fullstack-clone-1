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

        let followedByCurrent = "False";
        if (userObject.followedByCurrentUser === true) {
          followedByCurrent = "True";
        }

        let likesCurrent = "False";
        if (userObject.likesCurrentUser === true) {
          likesCurrent = "True";
        }

        if (userObject.id === this.props.currentUser.id) {
          return (
            <li key={userObject.id} className="empty-feedItem-container">
            </li>
          );

        } else {
          return (
              <li key={userObject.id} className="feedItem-container">
                  <div className="subcontainer">

                      <section className="info-top">

                          <div className="top-left-container">
                              <div className="thumbnailPic-container">
                                  <img
                                      id="thumbnail"
                                      src={userObject.profileImgUrl}
                                      alt="photo"
                                  />
                              </div>
                          </div>

                          <div className="top-right-container">
                              <div id="info-username">{userObject.username}</div>
                              <div id="info-location">{userObject.name}</div>
                          </div>

                      </section>

                      <section className="feed-bottom-outer">
                          <div className="feed-bottom-inner">

                              <div className="likes-container" >
                                  <p>Likes Container</p>
                              </div>

                              <div className="caption-container">
                                  <div>{userObject.username}</div>
                                      <div id="caption-spacer"></div>
                                  <div id="info-caption">{userObject.tagline}</div>
                              </div>


                              <div className="comment-list">
                                  <p>CommentList</p>
                              </div>

                              <div className="info-followerCount"># of Followers: {userObject.followersCount}</div>
                              <div className="info-followedByCurrent">Followed by current user: {followedByCurrent}</div>
                              <div id="info-uploadDate">{userObject.username} add capitalize and ago and change to be timestamp for_the Follow</div>
                              <div className="info-likesCurrent">This user likes photos of_current_user: {likesCurrent}</div>
                              <div id="info-uploadDate">{userObject.username} add capitalize and ago and change to be timestamp for_the Like</div>

                              <div id="line"></div>


                          </div>
                      </section>

                  </div>
              </li>
          );

        }

      });

    }


    return (
      <div id="follow-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>

          <main id="follow-sub-container">

              <div id="left-side">
              </div>

              <div id="right-side">
                  <ul id="follow-list-container">
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
