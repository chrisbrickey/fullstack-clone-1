import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

console.log("on the profile.jsx");

class Profile extends React.Component {
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
      // this.props.fetchAllPhotos();
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

    console.log("in the render method of profile.jsx")

    const photoFeedObject = this.props.photos.byId;
    let userPhotoList = [];

    if (photoFeedObject) {
      // console.log("photoFeedObject exists b/c I'm in the if statement");

        // userPhotoList = Object.keys(photoFeedObject).filter( (id) => {
        //     let photo = photoFeedObject[id];
        //     return photo;
        // });
        //
        // console.log(userPhotoList);

      Object.keys(photoFeedObject).forEach( (id) => {
          let photo = photoFeedObject[id];

          if (photo.userId === this.props.currentUser.id) {
            userPhotoList.push(photo);
          }

      });

    }

    let photoListRender = userPhotoList.map((photo) => {
      return (
          <li key={photo.id} className="photoItem-container">
              <img
                  src={photo.photoUrl}
                  alt="photo"
              />
          </li>
      );
    });


    return (
      <div className="profile-page-container">on the profile.jsx

          <HeaderXXX userId={this.props.currentUser.id}/>

          <section>
              <button
                  onClick={this.props.logoutDestroySession}
                  className="logout-button">Logout
              </button>
          </section>

          <main>
              <ul className="userPhotoAlbum">
                  {photoListRender}
              </ul>
          </main>


          <FooterXXX/>

      </div>
    );

  }


}

export default Profile;
// export default withRouter(Profile);
