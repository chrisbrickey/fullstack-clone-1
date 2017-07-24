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

    return (
      <div className="profile-page-container">on the upload.jsx

          <HeaderXXX userId={this.props.currentUser.id}/>

          <section>
              <button
                  onClick={this.props.logoutDestroySession}
                  className="logout-button">Logout
              </button>
          </section>


          <section>
            <UploadButton/>
          </section>

          <main>
              <ul className="whatevs">
                  {}
              </ul>
          </main>

        <FooterXXX/>

      </div>
    );

  }


}

export default Upload;
// export default withRouter(Upload);
