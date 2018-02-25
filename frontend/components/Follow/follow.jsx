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
            <li key={userObject.id} className="empty-followItem-container">
            </li>
          );

        } else {
          return (
              <li key={userObject.id} className="followItem-container">
                  <div className="follow-item-box">

                      <section className="follow-left-container">
                          <div className="follow-part-A">
                              <div className="thumbnailPic-container">
                                  <img
                                      id="thumbnail"
                                      src={userObject.profileImgUrl}
                                      alt="photo"
                                  />
                              </div>
                          </div>

                          <div className="follow-part-B">
                              <div id="info-username">{userObject.username}</div>
                          </div>
                      </section>

                      <section className="follow-right-container">
                          <div className="follow-part-C">
                              space
                          </div>

                          <div className="follow-part-C">
                              <div id="info-uploadDate">
                                  {userObject.username} add capitalize and ago and change to be timestamp for_the Like
                              </div>
                              <div className="info-likesCurrent">This user likes photos of_current_user: {likesCurrent}</div>
                          </div>

                          <div className="follow-part-C">
                              <div className="info-followedByCurrent">
                                  Followed by current user: {followedByCurrent}
                              </div>
                          </div>
                      </section>


                  </div>

                  <div className="feed-bottom-outer">
                      <div className="feed-bottom-inner">

                          <div className="caption-container">
                              <div>{userObject.username}</div>
                                  <div id="caption-spacer"></div>
                              <div id="info-caption">say something</div>
                          </div>

                          <div className="comment-list">
                              <p>CommentList</p>
                          </div>

                          <div className="info-followerCount"># of Followers: {userObject.followersCount}</div>
                          <div id="info-uploadDate">{userObject.username} add capitalize and ago and change to be timestamp for_the Follow</div>
                          <div className="info-likesCurrent">This user likes photos of_current_user: {likesCurrent}</div>

                          <div id="line"></div>

                      </div>
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
