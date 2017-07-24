import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


import FooterXXX from '../Navigation/footer';

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

    return (
      <div className="profile-page-container">on the profile.jsx

          <section className="header-container">
            <div className="navLinks-header">

                <div className="left-header">
                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614262/camera_jmhdl8.png'}
                        alt="Instagram Camera Icon"
                        className="camera-icon"
                    />

                    <div className="vertical-line"></div>

                      <Link className="profile-link" to={`/`}>
                          <img
                              src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500659742/InstagramLogo_kgliwu.png'}
                              alt="Instagram Logo"
                              className="header-logo"
                          />
                      </Link>

                </div>



                <div className="mid-header">
                    <Link className="profile-link" to="/upload">
                        <img
                            src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500855174/001-cloud-computing_gjhr1n.png'}
                            alt="upload icon"
                            className="upload-icon"
                        />
                    </Link>
                </div>



                <div className="right-header">
                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614263/compass_chujqx.svg'}
                        alt="explore icon"
                        className="header-icon"
                    />

                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614263/heart_sqbqyf.svg'}
                        alt="follows icon"
                        className="header-icon"
                    />

                  <Link className="profile-link" to={`users/${this.props.currentUser.id}`}>
                      <img
                          src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614263/user_nu2dc8.svg'}
                          alt="user icon"
                          className="header-icon"
                      />
                  </Link>


                </div>

            </div>
          </section>

          <section>
              <button
                  onClick={this.props.logoutDestroySession}
                  className="logout-button">Logout
              </button>
          </section>

          <main>
              <ul className="userFeed">
                  {}
              </ul>
          </main>


          <FooterXXX/>

      </div>
    );

  }


}

export default Profile;
// export default withRouter(Profile);
