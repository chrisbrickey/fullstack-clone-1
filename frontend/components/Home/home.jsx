import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';


console.log("on the home.jsx");

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: {
    //     name: "",
    //     username: "",
    //     password: ""
    //   },
    //   errors: {}
    // };

    //this.anyMethod = this.anyMethod.bind(this);
    // this.cropPhoto = this.cropPhoto.bind(this);
  }


  componentDidMount() {
      this.props.fetchAllPhotos();
    }

  // cropPhoto(photoUrl) {
  //   const cropText = "/upload/c_thumb,w_600/";
  //   // const cropText = "/upload/c_thumb,h_500,w_500/";
  //   const photoUrlArray = photoUrl.split("/upload/");
  //   const croppedUrl = photoUrlArray[0] + cropText + photoUrlArray[1];
  //
  //   return croppedUrl;
  // }


  //remember that errors and other objects might be null so render conditionally
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
                                  src="https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png"
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

                        <div className="item-at-bottom" id="info-uploadDate">
                          <div className="line"></div>  
                        </div>

                        <div className="item-at-bottom" id="info-addComment">placeholder for comments</div>
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
// export default withRouter(Home);
