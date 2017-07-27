import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import sortBy from 'lodash/sortBy';
import _ from 'lodash';

import FooterXXX from '../Navigation/footer';
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
    let arrayOfIdsOrderedByTimePosted = [];

    if (photoFeedObject) {
        console.log("original photoFeedObject", photoFeedObject);
        console.log("keys", Object.keys(photoFeedObject));

        ////===================NEW CODE=====================
        let photoFeedArrayValues = Object.values(photoFeedObject);
        console.log("new photoFeedArrayValues", photoFeedArrayValues);

        //this appears to sort from most recent to oldest
        let sortedFeedObjects = sortBy(photoFeedArrayValues, 'uploadDate');
        console.log("sortedFeedObjects", sortedFeedObjects);


        sortedFeedObjects.forEach( (photo1) => {
          // console.log("photo from sorted array", photo1);
          // console.log("photo's id from sorted array", photo1.id);
          arrayOfIdsOrderedByTimePosted.push((photo1.id).toString());
        });

        console.log("arrayOfIdsOrderedByTimePosted", arrayOfIdsOrderedByTimePosted);
        console.log("original keys that I was mapping over", Object.keys(photoFeedObject));

        // photoFeedList = sortedFeedObjects.map( (id) => {
        //     let photo = sortedFeedObjects[id];
        //     console.log("photo in the loop", photo);
        ////==================NEW CODE=====================


        photoFeedList = arrayOfIdsOrderedByTimePosted.map( (id) => {
        // photoFeedList = Object.keys(photoFeedObject).map( (id) => {
            let photo = photoFeedObject[id];
            console.log("photo in main loop", photo);

            return (
                <li key={photo.id} className="feedItem-container">
                    <div className="info-top">


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


                      </div>


                    <img className="the-main-event"
                        src={photo.photoUrl}
                        alt="photo"
                    />


                    <div className="info-bottom">
                        <div className="item-at-bottom" id="info-caption">{photo.caption}</div>

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

          <FooterXXX/>

      </div>
    );

  }


}

export default Home;
