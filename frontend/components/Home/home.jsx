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
                    <p>{photo.username}</p>
                    <p>{photo.caption}</p>
                    <p>{photo.uploadDate}</p>
                    <img
                        src={photo.photoUrl}
                        alt="photo"
                    />
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
