import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import theFooter from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';


console.log("on the home.jsx");

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
      this.props.fetchAllPhotos();
  }

  render() {

    const photoFeedObject = this.props.photos.byId;
    let photoFeedList = null;

    if (photoFeedObject) {

        photoFeedList = Object.keys(photoFeedObject).map( (id) => {
            let photo = photoFeedObject[id];

            return (
                <li key={photo.id} className="feedItem-container">
                    <div className="info-top">
                        <div className="thumbnailPic-container">
                              <img
                                  id="thumbnail"
                                  src={photo.profileImgUrl}
                                  alt="photo"
                              />
                          </div>
                        <div id="info-username">{photo.username}</div>

                      </div>

                    <img
                        src={photo.photoUrl}
                        alt="photo"
                    />

                    <div className="info-bottom">
                        <div className="item-at-bottom" id="info-caption">{photo.caption}</div>
                        <div className="item-at-bottom" id="info-location">{photo.location}</div>
                        <div className="item-at-bottom" id="info-uploadDate">{photo.uploadDate} ago</div>

                        <div className="item-at-bottom">
                          <div id="line"></div>
                        </div>

                        <div className="item-at-bottom" id="info-addComment">Add a comment... (placeholder)</div>
                    </div>
                </li>
            );
        });
    }


    return (
      <div className="home-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>

          <main>
              <ul className="photoFeed">
                  {photoFeedList}
              </ul>
          </main>

          <theFooter/>

      </div>
    );

  }


}

export default Home;
