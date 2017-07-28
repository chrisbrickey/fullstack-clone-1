import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import sortBy from 'lodash/sortBy';
import _ from 'lodash';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';
import LikesContainer from '../Likes/likes_container';


console.log("on the home.jsx");

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchAllPhotos();
  }

  render() {


    // console.log("this.props", this.props);

    const photoFeedObject = this.props.photos.byId;
    let photoFeedList = null;
    let arrayOfIdsOrderedByTimePosted = [];

    if (photoFeedObject) {
        // console.log("original photoFeedObject", photoFeedObject);

        let photoFeedArrayValues = Object.values(photoFeedObject);
        // console.log("new photoFeedArrayValues", photoFeedArrayValues);

        let sortedFeedObjects = sortBy(photoFeedArrayValues, 'exactTime').reverse();
        // console.log("sortedFeedObjects", sortedFeedObjects);


        sortedFeedObjects.forEach( (photo1) => {
          arrayOfIdsOrderedByTimePosted.push((photo1.id).toString());
        });

        photoFeedList = arrayOfIdsOrderedByTimePosted.map( (id) => {
            let photo = photoFeedObject[id];

            return (


                <li key={photo.id} className="feedItem-container">

                    <section className="info-top">

                        <div className="top-left-container">NEW!!
                            <div className="thumbnailPic-container">
                                <img
                                    id="thumbnail"
                                    src={photo.profileImgUrl}
                                    alt="photo"
                                />
                            </div>
                        </div>

                        <div className="top-right-container">NEW!!
                            <div id="info-username">{photo.username}</div>
                            <div className="item-at-bottom" id="info-location">{photo.location}</div>
                        </div>

                    </section>


                    <img className="the-main-event"
                        src={photo.photoUrl}
                        alt="photo"
                    />


                    <section className="info-bottom">
                        <div className="item-at-bottom" >

                            <div className="likes-container">
                                <LikesContainer
                                  currentUser={this.props.currentUser}
                                  thisPhoto={photo}
                                  thisPhotoId={photo.id}
                                  createPhotoLike={this.props.createPhotoLike}
                                  destroyPhotoLike={this.props.destroyPhotoLike}
                                  />
                            </div>

                            <div id="info-caption">{photo.username}</div>
                                <div id="caption-spacer"></div>
                            <div id="info-caption">{photo.caption}</div>

                              <div className="item-at-bottom">
                                <div id="comment-spacer"></div>
                              </div>

                            <div className="item-at-bottom">
                              <div id="line"></div>
                            </div>


                            <div className="item-at-bottom" id="info-uploadDate">{photo.uploadDate} ago</div>

                            <div className="item-at-bottom">
                              <div id="line"></div>
                            </div>

                            <div className="item-at-bottom" id="info-addComment">Add a comment... (placeholder)</div>



                        </div>
                    </section>

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

          <FooterXXX/>

      </div>
    );

  }


}

export default Home;
