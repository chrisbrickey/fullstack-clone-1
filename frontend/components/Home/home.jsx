import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import sortBy from 'lodash/sortBy';
import _ from 'lodash';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';
import LikesContainer from '../Likes/likes_container';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchAllPhotos();
  }

  capitalize(string) {
    let newString = "";
    let oldArray = string.split("");
    oldArray.forEach( (el) => {
      newString += el.toUpperCase();
    });

    return newString;
  }

  render() {


    // console.log("this.props", this.props);

    const photoFeedObject = this.props.photos.byId;
    let photoFeedList = null;
    let arrayOfIdsOrderedByTimePosted = [];

    if (photoFeedObject) {

        let photoFeedArrayValues = Object.values(photoFeedObject);

        let sortedFeedObjects = sortBy(photoFeedArrayValues, 'exactTime').reverse();


        sortedFeedObjects.forEach( (photo1) => {
          arrayOfIdsOrderedByTimePosted.push((photo1.id).toString());
        });

        photoFeedList = arrayOfIdsOrderedByTimePosted.map( (id) => {
            let photo = photoFeedObject[id];

            return (


                <li key={photo.id} className="feedItem-container">

                    <section className="info-top">

                        <div className="top-left-container">
                            <div className="thumbnailPic-container">
                                <img
                                    id="thumbnail"
                                    src={photo.profileImgUrl}
                                    alt="photo"
                                />
                            </div>
                        </div>

                        <div className="top-right-container">

                            <div id="info-username">{photo.username}</div>
                            <div id="info-location">{photo.location}</div>

                        </div>

                    </section>


                    <img className="the-main-event"
                        src={photo.photoUrl}
                        alt="photo"
                    />


                  <section className="feed-bottom-outer">
                        <div className="feed-bottom-inner">

                            <div className="likes-container" >
                                <LikesContainer
                                  currentUser={this.props.currentUser}
                                  thisPhoto={photo}
                                  thisPhotoId={photo.id}
                                  createPhotoLike={this.props.createPhotoLike}
                                  destroyPhotoLike={this.props.destroyPhotoLike}
                                  />
                            </div>

                            <div className="caption-container">
                                <div>{photo.username}</div>
                                    <div id="caption-spacer"></div>
                                <div id="info-caption">{photo.caption}</div>
                            </div>


                            <div id="comment-spacer"></div>

                            <div id="line"></div>

                            <div id="info-uploadDate">{this.capitalize(photo.uploadDate)} AGO</div>


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
