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

    console.log("this.props", this.props);

    const photoFeedObject = this.props.photos.byId;
    let photoFeedList = null;
    let arrayOfIdsOrderedByTimePosted = [];

    if (photoFeedObject) {
        console.log("original photoFeedObject", photoFeedObject);

        ////===================NEW CODE=====================
        let photoFeedArrayValues = Object.values(photoFeedObject);
        console.log("new photoFeedArrayValues", photoFeedArrayValues);

        //this appears to sort from most recent to oldest
        let sortedFeedObjects = sortBy(photoFeedArrayValues, 'exactTime').reverse();
        console.log("sortedFeedObjects", sortedFeedObjects);


        sortedFeedObjects.forEach( (photo1) => {
          arrayOfIdsOrderedByTimePosted.push((photo1.id).toString());
        });

        // console.log("arrayOfIdsOrderedByTimePosted", arrayOfIdsOrderedByTimePosted);
        // console.log("original keys that I was mapping over", Object.keys(photoFeedObject));
        ////==================NEW CODE=====================


        photoFeedList = arrayOfIdsOrderedByTimePosted.map( (id) => {
        // photoFeedList = Object.keys(photoFeedObject).map( (id) => {
            let photo = photoFeedObject[id];
            // console.log("photo in main loop", photo);

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
                                <LikesContainer thisPhoto={photo} thisPhotoId={photo.id}/>
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
