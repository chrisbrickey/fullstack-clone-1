import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';
import UploadButton from './uploadButton';


console.log("on the upload.jsx");

class Upload extends React.Component {
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
    this.postPhoto = this.postPhoto.bind(this);
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

  //receives photoUrl as argument and adds photo to db on backend AND shows this photo on the front end (so user an edit)
  postPhoto(photoUrl) {
    console.log("inside postPhoto on upload.jsx");
    let newPhoto = {photo_url: photoUrl};
    console.log(newPhoto);
    this.props.createPhoto({photo: newPhoto});

    //replacing this ajax with asynchronous call above which includes ajax call
    // $.ajax({
    //   method: 'POST',
    //   url: '/api/photos',
    //   data: {photo: newPhoto}

      //below adds newPhoto to frontend AFTER it comes back from backend, but app already does this via fetchAllPhotos
      // success: ((newPhotoFromBackend) => {
      //   var photos = this.state.photos.byId;
      //   photos.newPhotoFromBackend.id = newPhotoFromBackend;
      //   photos.currentPhoto = newPhotoFromBackend.id;
      //   this.setState({photos: photos});
      // })
    // });
  }

  //remember that errors and other objects might be null so render conditionally
  render() {

    console.log("rendering on upload.jsx");

    return (
      <div className="upload-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>


          <section className="upload-sub-container">
              <div className="upload-form-container">


                  <div className="textInput">


                  </div>

                  <div className="cloudinary-container">
                    <UploadButton postPhoto={this.postPhoto}/>
                  </div>


                  <div className="formSubmitButton">
                  </div>




              </div>
          </section>


          <button
              className="logout-button"
              onClick={this.props.logoutDestroySession}>
              Logout
          </button>


          <FooterXXX/>

      </div>
    );

  }


}

export default Upload;
// export default withRouter(Upload);
